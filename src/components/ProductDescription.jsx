
function ProductDescription({ product }) {
  return (
    <div className="mt-20">
        <div className="flex gap-3 mb-4">
            <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">Description</button>
            <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">Care Guide</button>
            <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">Guide</button>
        </div>
        <div className="flex flex-col pb">
            <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dolor ad commodi possimus earum suscipit harum sequi, in facilis. Nihil vero cupiditate maxime repellendus deleniti suscipit reprehenderit enim, veniam blanditiis, esse asperiores minus reiciendis quisquam assumenda. Aliquid odio veniam inventore.</p>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestias ipsa ad at dignissimos ipsam officia tempore adipisci eum odit quasi, minima eius iure velit ipsum consequatur possimus? Officia, deserunt fuga minima, reprehenderit maiores sit quasi atque adipisci ex accusamus repellat cum, sint fugit hic impedit iure nesciunt optio sed.</p>
        </div>
    </div>
  )
}

export default ProductDescription