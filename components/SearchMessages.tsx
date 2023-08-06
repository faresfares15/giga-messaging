export default function SearchMessages() {
    return (
        //TODO: Add search property
        <div className="flex py-3 px-6 flex-col items-start gap-[0.625rem] self-stretch w-full">
            <input
            className="flex w-full h-12 py-[0.625rem] px-5 items-center gap-[0.625rem] self-stretch rounded-xl bg-[#F3F3F3]"
            placeholder={"Search Messages"}
            />

        </div>
    );
}