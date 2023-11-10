export default function Loading() {

    return (
        <div className=" h-screen w-full flex justify-center items-center" >
            <div
                className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent  motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">

            </div>
        </div>
    )
}