import { PropsWithChildren } from "react"
import "./Table.scss"

interface Tables {
    col1: string[],
    col2: string[],
}

interface Props {
    TableHeader: React.ReactNode,
    tables: Tables[]
    className?: string
}

function Table({ TableHeader, tables, className, children }: PropsWithChildren<Props>) {
    return (
        <table className={ "table " + className }>
            <tr>
                { TableHeader }
            </tr>
            <tr>
                <td>
                    {
                        tables.map((val) => (
                            <table>
                                { val.col1.map((_, i) => (
                                    <tr>
                                        <td>{ val.col1[i] }</td>
                                        <td>{ val.col2[i] }</td>
                                    </tr>
                                )) }
                            </table>
                        ))
                    }
                    { children ? (
                        <table>{ children }</table>
                    ) : undefined }
                </td>
            </tr>
        </table>

    )
}

export default Table