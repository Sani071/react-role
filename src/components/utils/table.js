import React from 'react';
import { Link } from 'react-router-dom';

export default function Table({ data, th, td, param, paramKey, hideDelete, onAction }) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        { th.map((itm, idx) => {
                            return <th key={ idx }>{ itm }</th>
                        }) }
                    </tr>
                </thead>
                <tbody>
                    { data.map((itm, idx) => {
                        return <tr key={ idx }>
                            { td ? td.map((key, idx) => {
                                const ele = itm[key]
                                return <td key={ idx }>
                                    { Array.isArray(ele) ? ele.map((itm, idx) => {
                                        return <span className="badge badge-primary ml-1" key={ idx }>{ itm }</span>
                                    }) : ele }
                                </td>
                            }) : <td>{ itm }</td> }
                            <td >
                                <Link className="rr-link" to={ `/${param}/?${paramKey}=${itm[paramKey]}` }> <span className={ hideDelete ? "d-none" : "badge badge-secondary pointer" }>Edit</span></Link>
                                <span className="badge badge-danger ml-3 pointer" onClick={ (() => {
                                    onAction && onAction(paramKey ? itm[paramKey] : itm)
                                }) }>Delete</span>
                            </td>
                        </tr>
                    }) }
                </tbody>
            </table>
        </div>
    )
}
