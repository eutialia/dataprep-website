import style from "../../../styles/terminal.module.css"

type SyntaxProps = {
  text: string
}

type CodeFrameProps = {
  children: JSX.Element[]
}

export const Declare = ({ text }: SyntaxProps) => (
  <span className="font-mono text-yellow-400">{text}</span>
)

export const Package = ({ text }: SyntaxProps) => (
  <span className="font-mono text-blue-700">{text}</span>
)

export const Param = ({ text }: SyntaxProps) => (
  <span className="font-mono text-red-600">{text}</span>
)

export const CodeFrame = ({ children }: CodeFrameProps) => (
  <div
    className={`${style.codeArea} border-2 border-solid border-primary-100 shadow-md mb-1 md:max-w-lg`}
  >
    <ol className="pl-6 text-xs font-mono bg-white overflow-auto h-full rounded-b list-inside list-none xl:text-sm">
      {children}
    </ol>
  </div>
)

export const EdaCode = () => (
  // from dataprep.datasets import load_dataset
  // from dataprep.eda import plot
  // df = load_dataset("titanic")
  // plot(df, "Age")
  <CodeFrame>
    <li>
      <Declare text="from" /> <Package text="dataprep.datasets" />{" "}
      <Declare text="import" /> load_dataset
    </li>
    <li>
      <Declare text="from" /> <Package text="dataprep.eda" />{" "}
      <Declare text="import" /> plot
    </li>
    <li>
      df = load_dataset(
      <Param text='"titanic"' />)
    </li>
    <li>
      plot(df, <Param text='"Age"' />)
    </li>
  </CodeFrame>
)

export const CleanCode = () => (
  // import pandas as pd
  // from dataprep.clean import clean_country
  // df = pd.DataFrame({"country": ["USA", "country: Canada", " France ", "233", " tr "]})
  // clean_country(df, "country")
  <CodeFrame>
    <li>
      <Declare text="import" /> <Package text="pandas" /> <Declare text="as" />{" "}
      pd
    </li>
    <li>
      <Declare text="from" /> <Package text="dataprep.clean" />{" "}
      <Declare text="import" /> clean_country
    </li>
    <li>
      df = pd.DataFrame(
      <Param text='{"country": ["USA", "country: Canada", " France ", "233", " tr "]}' />
      )
    </li>
    <li>
      clean_country(df, <Param text='"country"' />)
    </li>
  </CodeFrame>
)

export const ConnectorCode = () => (
  // from dataprep.connector import connect
  // dc = connect("dblp", _concurrenncy=5)
  // df = await dc.query("publication", q="NeurIPS 2020", _count=5000)
  <section>
    <CodeFrame>
      <li>
        <Declare text="from" /> <Package text="dataprep.connector" />{" "}
        <Declare text="import" /> connect
      </li>
      <li>
        dc = connect(
        <Param text='"dblp"' />, _concurrenncy=
        <Param text="5" />)
      </li>
      <li>
        df = <Declare text="await" /> dc.query(
        <Param text='"publication"' />, q=
        <Param text='"NeurIPS 2020"' />, _count=
        <Param text="5000" />)
      </li>
    </CodeFrame>
    <CodeFrame>
      <li>
        <Declare text="from" /> <Package text="dataprep.connector" />{" "}
        <Declare text="import" /> read_sql
      </li>
      <li>
        sql = <Param text='"SELECT * FROM publication"' />
      </li>
      <li>
        conn = <Param text='"postgresql://username:password@ip:5432/dblp"' />
      </li>
      <li>
        df = read_sql(conn,sql)
      </li>
    </CodeFrame>
  </section>
)
