import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { BASKET } from "../Context/Context";
import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

function Profil() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const { sebet, finalPrice, totalCount, removeBasket } = useContext(BASKET);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          email: currentUser.email,
          name: currentUser.displayName,
          phone: currentUser.phoneNumber,
          photo: currentUser.photoURL,
          uid: currentUser.uid,
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // İstifadəçinin keçmiş sifarişlərini real-time dinlə
  useEffect(() => {
    if (!user?.uid) return;

    const q = query(
      collection(db, "orders"),
      where("userId", "==", user.uid),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(list);
    });

    return () => unsubscribe();
  }, [user?.uid]);

  async function logout() {
    toast.success("profilde cixis edilir");
    setTimeout(() => {
      signOut(auth);
      navigate("/login");
    }, 3000);
  }

  async function handleCheckout() {
    if (!user) {
      toast.error("Zəhmət olmasa əvvəlcə daxil olun");
      return;
    }
    if (sebet.length === 0) {
      toast.error("Səbətiniz boşdur");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "orders"), {
        userId: user.uid,
        userEmail: user.email,
        items: sebet.map((item) => ({
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
        })),
        totalCount,
        totalPrice: finalPrice,
        paymentMethod,
        status: "pending",
        createdAt: serverTimestamp(),
      });

      removeBasket();
      toast.success("Sifarişiniz uğurla qeydə alındı!");
    } catch (error) {
      console.error(error);
      toast.error("Sifariş zamanı xəta baş verdi");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-32 flex flex-col gap-10">
      {/* İstifadəçi məlumatları */}
      <div className="flex items-center gap-4 border-b pb-6">
        {user?.photo && (
          <img
            src={user.photo}
            alt="profil"
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        <div>
          <h2 className="text-xl font-bold text-[#001623]">
            {user?.name || "İstifadəçi"}
          </h2>
          <p className="text-gray-500 text-sm">{user?.email}</p>
        </div>
      </div>

      {/* Səbətdəki məhsullar */}
      <div>
        <h3 className="text-lg font-semibold text-[#001623] mb-4">
          Səbətinizdəki məhsullar
        </h3>

        {sebet.length === 0 ? (
          <p className="text-gray-500">Səbətiniz boşdur.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {sebet.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border rounded-lg p-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <p className="font-medium text-[#001623]">{item.title}</p>
                  <p className="text-sm text-gray-500">ID: {item.id}</p>
                  <p className="text-sm text-gray-500">
                    Say: {item.quantity}
                  </p>
                </div>
                <p className="font-semibold text-[#001623]">
                  {(item.price * item.quantity).toFixed(2)} ₼
                </p>
              </div>
            ))}

            <div className="flex justify-between font-bold text-lg border-t pt-3">
              <span>Ümumi:</span>
              <span>{finalPrice.toFixed(2)} ₼</span>
            </div>
          </div>
        )}
      </div>

      {/* Ödəniş üsulu */}
      {sebet.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-[#001623] mb-3">
            Ödəniş üsulu
          </h3>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Nağd ödəniş
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Kartla ödəniş
            </label>
          </div>

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="mt-5 bg-[#001623] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#0a2c40] transition disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Göndərilir..." : "Sifarişi tamamla"}
          </button>
        </div>
      )}

      {/* Keçmiş sifarişlər */}
      <div>
        <h3 className="text-lg font-semibold text-[#001623] mb-4">
          Sifariş tarixçəniz
        </h3>

        {orders.length === 0 ? (
          <p className="text-gray-500">Hələ sifarişiniz yoxdur.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>
                    {order.createdAt?.toDate
                      ? order.createdAt.toDate().toLocaleString("az-AZ")
                      : ""}
                  </span>
                  <span className="capitalize">{order.status}</span>
                </div>
                <div className="flex flex-col gap-1">
                  {order.items?.map((item) => (
                    <p key={item.id} className="text-sm">
                      {item.title} x{item.quantity} —{" "}
                      {(item.price * item.quantity).toFixed(2)} ₼
                    </p>
                  ))}
                </div>
                <div className="flex justify-between mt-2 font-semibold">
                  <span>
                    Ödəniş: {order.paymentMethod === "cash" ? "Nağd" : "Kart"}
                  </span>
                  <span>{order.totalPrice?.toFixed(2)} ₼</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="px-6 pb-6">
        <button
          onClick={logout}
          className="text-red-500 font-medium hover:text-red-700 transition cursor-pointer"
        >
          Çıxış edin
        </button>
      </div>
    </div>
  );
}

export default Profil;