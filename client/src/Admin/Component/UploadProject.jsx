import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpload, faXmark,} from "@fortawesome/free-solid-svg-icons";
import projectCategory from '../helpers/projectCategory'; 
import uploadImage from '../helpers/uploadImage';
import DisplayImage from './DisplayImage';
import { toast } from 'react-toastify';




    const UploadProject = ({
        onClose,
        fetchData
    }) => {
        const [data,setData] = useState({
            projectName : "",
            location : "",
            category : "",
            projectImage : [],
            description : "",
            price : ""
           
          })

          const [openFullScreenImage,setOpenFullScreenImage] = useState(false)
          const [fullScreenImage,setFullScreenImage] = useState("")

          const handleOnChange = (e)=>{
            const { name, value} = e.target
      
            setData((preve)=>{
              return{
                ...preve,
                [name]  : value
              }
            })
        }

          const handleUploadProject = async(e) => {
            const file = e.target.files[0]
            const uploadImageCloudinary = await uploadImage(file)
        
            setData((preve)=>{
              return{
                ...preve,
                projectImage : [ ...preve.projectImage, uploadImageCloudinary.url]
              }
            })
          }
          const handleDeleteProjectImage = async(index)=>{
            console.log("image index",index)
            
            const newProjectImage = [...data.projectImage]
            newProjectImage.splice(index,1)
        
            setData((preve)=>{
              return{
                ...preve,
                projectImage : [...newProjectImage]
              }
            })
            
          }
        
           {/**upload prodject */}
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try{
    
      const response = await fetch('http://localhost:3001/sever/product/upload-product',{
      method : 'POST',
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
  }

  const responseData = await response.json();

  if (responseData.success) {
      toast.success(responseData.message);
      onClose();
      fetchData();
  } else {
      toast.error(responseData.message);
  }
} catch (error) {
  console.error('Error during submission:', error);
  toast.error('An error occurred during submission');
}
};
  return (
    <div className='fixed w-full  h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
    <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>
    <div className='flex justify-between items-center pb-3'>
                <h2 className='font-bold text-lg'>Upload Project</h2>
                <div className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer'onClick={onClose}>
                <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>

            <form className='grid p-4 gap-2 overflow-y-scroll h-full pb-5 ' onSubmit={handleSubmit}>
            <label htmlFor='projectName'>Project Name :</label>
            <input 
              type='text' 
              id='projectName' 
              placeholder='enter project name' 
              name='projectName'
              value={data.projectName} 
              onChange={handleOnChange}
              className='p-2 bg-slate-100 border rounded'
              required
            />

        <label htmlFor='location' className='mt-3'>Location :</label>
            <input 
              type='text' 
              id='location' 
              placeholder='enter location' 
              value={data.location} 
              name='location'
              onChange={handleOnChange}
              className='p-2 bg-slate-100 border rounded'
              required
            />

<label htmlFor='category' className='mt-3'>Category :</label>
<select required value={data.category} name='category' onChange={handleOnChange} className='p-2 bg-slate-100 border rounded'>
                  <option value={""}>Select Category</option>
                  {
                    projectCategory.map((el,index)=>{
                      return(
                        <option value={el.value} key={el.value+index}>{el.label}</option>
                      )
                    })
                  }
              </select>
              <label htmlFor='projectImage' className='mt-3'>Project Image :</label>
              <label htmlFor='uploadImageInput'>
              <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer'>
                        <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
                          <span className='text-4xl'><FontAwesomeIcon icon={faUpload} /></span>
                          <p className='text-sm'>Upload Project Image</p>
                          <input type='file' id='uploadImageInput'  className='hidden' onChange={handleUploadProject}/>
                        </div>
              </div>
              </label> 
              <div>
                  {
                    data?.projectImage[0] ? (
                        <div className='flex items-center gap-2'>
                            {
                              data.projectImage.map((el,index)=>{
                                return(
                                  <div className='relative group'>
                                      <img 
                                        src={el} 
                                        alt={el} 
                                        width={80} 
                                        height={80}  
                                        className='bg-slate-100 border cursor-pointer'  
                                        onClick={()=>{
                                          setOpenFullScreenImage(true)
                                          setFullScreenImage(el)
                                        }}/>

                                        <div className='absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer' onClick={()=>handleDeleteProjectImage(index)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                           
                                        </div>
                                  </div>
                                  
                                )
                              })
                            }
                        </div>
                    ) : (
                      <p className='text-red-600 text-xs'>*Please upload project image</p>
                    )
                  }
                  
              </div>
              <label htmlFor='price' className='mt-3'>Price (LKR):</label>
              <input 
                type='number' 
                id='price' 
                placeholder='enter price' 
                value={data.price} 
                name='price'
                onChange={handleOnChange}
                className='p-2 bg-slate-100 border rounded'
                required
              />
               <label htmlFor='description' className='mt-3'>Description :</label>
              <textarea 
                className='h-28 bg-slate-100 border resize-none p-1' 
                placeholder='enter project description' 
                rows={3} 
                onChange={handleOnChange} 
                name='description'
                value={data.description}
              >
              </textarea>
              
              <button className='px-3 py-2 text-white mb-10 hover:bg-red-700'>Upload Project</button>

            </form>
    </div>

    
       {/***display image full screen */}
       {
        openFullScreenImage && (
          <DisplayImage onClose={()=>setOpenFullScreenImage(false)} imgUrl={fullScreenImage}/>
        )
       }
        
    </div>
  )
}
export default UploadProject