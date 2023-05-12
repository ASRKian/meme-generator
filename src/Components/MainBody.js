import Footer from "./Footer";
import Header from "./Header";
import Spinner from "./Spinner";

export default function MainBody(props) {

    return (<>
        <Header />
        <div className="card shadow-lg p-3 mb-1 bg-body rounded meme-div" >
                {!props.loading ? <Spinner /> : <img style={{ "margin": "auto" }} src={props.img} alt={props.alt} />}
            </div>
        <button type="button" className='next-button' onClick={props.next}>Next</button>
        <Footer />
    </>
    )
}
