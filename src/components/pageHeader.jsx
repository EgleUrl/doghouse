import React from 'react'
import { Link } from 'react-router-dom'
import './pageHeader.css'

const PageHeader = ({title, curPage}) => {
  return (
    <div className="pageheader-main">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="pageheader-content text-align-center text-center">
                            <h2><b>{title}</b></h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><Link className="link text-black" to="/doghouse/">Home</Link></li>
                                    {curPage === 'Product' && (
                                        <li className="breadcrumb-item"><Link className="link text-black" to="/doghouse/shop">Shop</Link></li>
                                    )}
                                    {curPage === 'Cart' && (
                                        <li className="breadcrumb-item"><Link className="link text-black" to="/doghouse/shop">Shop</Link></li>
                                    )}
                                    <li className="breadcrumb-item active text-black" aria-current="page">{curPage}</li>                                    
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
export default PageHeader