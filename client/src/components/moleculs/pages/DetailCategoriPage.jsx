import React, {useEffect} from "react"
import { Card, Button } from "react-bootstrap";
import { fetchBooks } from "../../../redux/admin/book/adminBookAction";
import Header from "../header/header";
import { useDispatch, useSelector } from "react-redux";


const DetailCategoriPage = ()=>{
    const dispatch = useDispatch()

    const { books, isLoading } = useSelector(state => state.adminBook)


    useEffect(() => {
        dispatch(fetchBooks())
    },[])

    console.log(books)


    return(
        <>
        <Header/>
        {books.data && books.data.map((book) =>{
            return(
                <>
                <div className="container ">
            <Card style={{ width: '15rem', marginTop: "2rem" }}>
                <Card.Img variant="top" src="https://www.iconpacks.net/icons/2/free-pdf-download-icon-2617-thumb.png"/>
                <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                    {book.url_file}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
</div>
                </>
            )

        })}
        
        </>
    )
    
}

export default DetailCategoriPage