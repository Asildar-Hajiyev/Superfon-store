import logo from '../assets/logo_new.svg'
function LoginRegisterLeft() {
  return (
    <div className="md:col-span-5 text-center md:text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium w-fit">
             Superfon-a xoş gəldiniz
          </div>
          <img src={logo} alt="logo" />
          <p className="text-slate-600 text-base lg:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Superfon ailəsinə qoşul, hesab yarat və sifarişlərini rahat idarə et. 
            Sevimli məhsullarını saxla və endirimlərdən ilk sən xəbərdar ol.
          </p>
        </div>
  )
}

export default LoginRegisterLeft
