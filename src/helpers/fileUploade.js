export const fileUploade = async( file ) => {

   const cloudUrl = `https://api.cloudinary.com/v1_1/dk1nll8jo/image/upload`;

   const formDate = new FormData();
   formDate.append('upload_preset', 'react-journal');
   formDate.append('file', file);

   try {
      
      const resp = await fetch(cloudUrl, {
         method: 'POST',
         body: formDate
      });

      if(resp.ok){
         const cloudResp = await resp.json();
         return cloudResp.secure_url;
      }else{
         throw await resp.json()
      }

   } catch (err) {
      throw err;
   }

}