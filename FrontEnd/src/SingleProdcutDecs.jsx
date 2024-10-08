const SingleProdcutDecs = () => {
    return (
        <>
            <section style={{backgroundColor:"white"}}>
                <div className="container py-5" style={{position : "relative" , top:"9rem"}}>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-4">
                            <div className="card text-black">
                                <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
                                    className="card-img-top" alt="Apple Computer" />
                                <div className="card-body">
                                    <div className="text-center">
                                        <h5 className="card-title">Believing is seeing</h5>
                                        <p className="text-muted mb-4">Apple pro display XDR</p>
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <span>Pro Display XDR</span><span>$5,999</span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span>Pro stand</span><span>$999</span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span>Vesa Mount Adapter</span><span>$199</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between total font-weight-bold mt-4">
                                        <span>Total</span><span>$7,197.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SingleProdcutDecs;