import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Splash.module.css'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { IUploadResult, uploadJsonToIpfs, uploadStreamToIpfs } from '../helpers/ipfs'


const Create: NextPage = () => {

 
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("media/imgPlaceholder.png");

  //UNCOMMENT for file uploads
  // const [image, setImage] = useState("File");
  // const [createObjectURL, setCreateObjectURL] = useState("media/imgPlaceholder.png");

  // const uploadToClient = (event:any) => {
  //   if (event.target.files && event.target.files[0]) {
  //     const i = event.target.files[0];
  //     setImage(i);
  //     setCreateObjectURL(URL.createObjectURL(i));
  //   }
  // };

  // const handleClickUpload = async () =>{
    
    // console.log("Uploading image file!");
    // let imageStream = await fetch("media/imgPlaceholder.png");
    // console.log("browser created image stream:");
    // console.log(imageStream);
    // var result:IUploadResult = await uploadStreamToIpfs(imageStream.body);
    // console.log("IPFS upload result:");
    // console.log(result);
    // const body = new FormData();
    // body.append("file", image);
    // body.append("name", name);
    // body.append("last", description);
    // console.log("-------------------Submitting upload data----------------------");
    // let bodySubmit = JSON.stringify(body);
    // const response = await fetch("/api/form", {
    //   method: "post",
    //   body: bodySubmit
    // });
    // console.log(response);

  // }

  const handleClickUpload = async() =>{
    const metadata = {
      name: name,
      image: imageUrl,
      description: description
    };
    var uploadJsonResult = await uploadJsonToIpfs(metadata);
    console.log("Result of json upload:");
    console.log(uploadJsonResult);
  }

  return (
    
    <div className="h-screen">
      <Head>
        <title>Art</title>
        <meta name="description" content="Spread the crypto love!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <main className="container px-4 mx-auto ">
     <Navbar></Navbar>

        <div className="h-[2rem]">
          {/* padding div for space between top and main elements */}
        </div>

        <div className="container grid md:grid-cols-2 gap-10 mx-auto place-items-center">
            <div className="w-full rounded">
              <img src={imageUrl} alt="image sneak peak" className="shadow rounded h-auto align-middle border-none" />
            </div>
            <div className="w-full rounded">
            <h5 className="mb-3 text-base font-bold text-black-900 lg:text-xl dark:text-white">
                  Create NFT
              </h5>

                      <label className="form-label inline-block mb-2 text-gray-700">
                        Image Path</label>
                        <input type="text" placeholder="ex: https://picsum.photos/200/300.jpg" id="imageUrl" name="imageUrl"
                        className="block
                        w-full
                        px-2
                        py-1.5
                        text-xl
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required onChange={(e) => setImageUrl(e.target.value)}></input>
                        {/* <input className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        hover:cursor-pointer
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="file" name="file" onChange={uploadToClient} required/> */}
                      <label className="form-label inline-block mb-2 text-gray-700">
                      Name</label>
                                
                      <input type="text" placeholder="The Big Rainbow, Red Rocket, etc." id="name" name="name"
                        className="block
                        w-full
                        px-2
                        py-1.5
                        text-xl
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required onChange={(e) => setName(e.target.value)}></input>
                      <label className="form-label inline-block mb-2 text-gray-700"
                                  >Description
                        </label>
                        
                        <textarea
                        className="
                        block
                        w-full
                        px-2
                        py-1.5
                        text-xl
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        id="description"
                        name="description"
                        rows={3}
                        placeholder="Your description"
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        ></textarea>

                        {/* upload button */}
                        <div className="item-end">
                          <button onClick={()=>handleClickUpload()} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-5">
                            Upload
                          </button>
                        </div>     
            </div>
        </div>
               

        <div className="h-[5rem]">
          {/* padding div for space between top and main elements */}
        </div>
        


      </main>

    </div>
 
  )
}

export default Create
