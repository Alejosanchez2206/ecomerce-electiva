
function Login() {
  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div className="max-w-[666px] h-[500px] bg-white m-auto px-14 py-10">
        <h3 className="h3">Sign up</h3>
        <div className="flex flex-col gap-4 mt-8">
          <input type="text" placeholder="Your Name" className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"/>
          <input type="email" placeholder="Email Address" className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"/>
          <input type="password" placeholder="Password" className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"/>
        </div>
        <button className="btn_dark_rounded my-5 w-full !rounded-md">Sign Up</button>
        <p className="text-black font-bold">Already have an account? <span className="text-secondary underline cursor-pointer">Log in</span></p>
        <div className="flexCenter mt-6 gap-3">
          <input type="checkbox" />
          <p>By creating an account, i agree to our Terms of Useand Privacy Policy.</p>
        </div>
      </div>
    </section>
  )
}

export default Login