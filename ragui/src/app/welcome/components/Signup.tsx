



export default function SignUp() {



    return(
        <div className="
            h-[100%] w-[100%]
            grid grid-rows-10 grid-cols-10
        ">
            <div className="row-start-2 row-end-3 col-start-2 col-end-10 text-gray-700 flex flex-col">
                <label htmlFor="email">Email</label>
                <input id="email" type="text" />
            </div>

            <div className="row-start-4 row-end-5 col-start-2 col-end-10 text-gray-700 flex flex-col">
                <label htmlFor="password">Password</label>
                <input id="password" type="text" />
            </div>

            <div className="row-start-6 row-end-6 col-start-2 col-end-10 text-gray-700 flex flex-col">
                <label htmlFor="password">Repeat password</label>
                <input id="password" type="text" />
            </div>

            <button className="row-start-7 row-end-8 col-start-2 col-end-10 text-gray-700">Submit</button>
        </div>
    )
}