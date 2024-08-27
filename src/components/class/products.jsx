import { Component } from "react";
import Linerloader from "../loader/linerloader";
import CustomImage from "../images/image1";
import { SecondaryHeading } from "../heading/heading1";
import axios from "axios";
import CustomCard from "../card/customcard";


class ProductList extends Component{
     state={
        products:[],
        loading:true,
        error:false,
     }
    componentDidMount(){
        console.log("I am Executed")
        this.fetchdata();
    }
    fetchdata=async()=>{
      
      const {status,data}= await axios("https://dummyjson.com/products") 
      if(status===200) {
      this.setState({
            products:data.products, 
            loading:false
          },()=>{})
  
      }
    
        //   const {products}=await data.json();
          
        // catch(err){
        //     console.error(err)
        //     this.setState({
        //         error:true
        //     })
        
          
         
    }

    render() {
        return(
            <>
            <h2>Products List</h2>
            {
                this.state.loading?<Linerloader/>:<>
               
                  {
                    this.state.products.map((eachproduct,index)=>{
                        return(
                            <div key={index} className="d-flex" >
                                <CustomCard title={eachproduct.title} image={eachproduct.images.map(imagelink=>{return(imagelink)})}
                                 description={eachproduct.description} price={eachproduct.price} brand={eachproduct.brand}/>
                             {/* <h2>{eachproduct.title}</h2>
                             <CustomImage source={eachproduct.images.map((image)=>{
                                        return(
                                               image
                                        )
                             })} height={250} width={250}/>
                             <p>{eachproduct.description}</p>
                        <h5> {`Brand name:${eachproduct.brand}`}    </h5> */}
                            
                            </div>
                        )
                    })
                  }

                </>
            }
            </>
          
        )
    }

}

export default ProductList


//   {
//             "id": 1,
//             "title": "Essence Mascara Lash Princess",
//             "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//             "category": "beauty",
//             "price": 9.99,
//             "discountPercentage": 7.17,
//             "rating": 4.94,
//             "stock": 5,
//             "tags": [
//                 "beauty",
//                 "mascara"
//             ],
//             "brand": "Essence",
//             "sku": "RCH45Q1A",
//             "weight": 2,
//             "dimensions": {
//                 "width": 23.17,
//                 "height": 14.43,
//                 "depth": 28.01
//             },
//             "warrantyInformation": "1 month warranty",
//             "shippingInformation": "Ships in 1 month",
//             "availabilityStatus": "Low Stock",
//             "reviews": [
//                 {
//                     "rating": 2,
//                     "comment": "Very unhappy with my purchase!",
//                     "date": "2024-05-23T08:56:21.618Z",
//                     "reviewerName": "John Doe",
//                     "reviewerEmail": "john.doe@x.dummyjson.com"
//                 },
//                 {
//                     "rating": 2,
//                     "comment": "Not as described!",
//                     "date": "2024-05-23T08:56:21.618Z",
//                     "reviewerName": "Nolan Gonzalez",
//                     "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
//                 },
//                 {
//                     "rating": 5,
//                     "comment": "Very satisfied!",
//                     "date": "2024-05-23T08:56:21.618Z",
//                     "reviewerName": "Scarlett Wright",
//                     "reviewerEmail": "scarlett.wright@x.dummyjson.com"
//                 }
//             ],
//             "returnPolicy": "30 days return policy",
//             "minimumOrderQuantity": 24,
//             "meta": {
//                 "createdAt": "2024-05-23T08:56:21.618Z",
//                 "updatedAt": "2024-05-23T08:56:21.618Z",
//                 "barcode": "9164035109868",
//                 "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
//             },
//             "images": [
//                 "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
//             ],
//             "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
//         },