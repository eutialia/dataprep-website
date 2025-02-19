type ExampleCardProps = {
  title: string
  content: string
  sub_content: string
  snippetComponent: JSX.Element
  leftToRight: boolean
}

export const ExampleCard = ({
  title,
  content,
  sub_content,
  snippetComponent,
  leftToRight,
}: ExampleCardProps) => {
  return (
    <div className="block justify-between items-center my-5 md:flex">
      {leftToRight ? (
        <>
          <div className="flex-initial md:w-5/12">
            <h2 className="text-primary-500 mb-5 font-bold">{title}</h2>
            <p className="text-lg lg:text-2xl">{content}</p>
            {sub_content ? (
              <>
                <br />
                <p className="text-lg lg:text-2xl">{sub_content}</p>



              </>
            ) : (<></>)}

          </div>
          <div className="flex-initial hidden md:block">{snippetComponent}</div>
        </>
      ) : (
        <>
          <div className="flex-initial hidden md:block">{snippetComponent}</div>
          <div className="flex-initial md:w-5/12">
            <h2 className="text-primary-500 mb-5 font-bold">{title}</h2>
            <p className="text-lg lg:text-2xl">{content}</p>
            {sub_content ? (
              <>
                <br />
                <p className="text-lg lg:text-2xl">{sub_content}</p>
              </>
            ) : (<></>)}
          </div>
        </>
      )}
    </div>
  )
}
