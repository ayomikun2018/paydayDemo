import React from 'react'
import { Carousel } from "react-carousel-slider-component";
import user1 from "../assets/image 2 (1).png";
import user2 from "../assets/image 1.png";
import user3 from "../assets/landingPage/image 1.svg";

export default function Slider() {
  return (
<div className=" bg-[#F2F5FA] hidden lg:block lg:w-[50%]  h-auto">
          <nav className=" font-[600px] text-[24px] mx-auto p-6  ">
            <span className=" text-orange">Salary</span>
            <span className=" text-blue"> PayDay</span>{" "}
          </nav>
          <Carousel
            totalSlides={3}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplayDuration={2}
            infinite={true}
            arrowStatus={false}
            indicators={true}
          >
            <div className=" ">
              <img src={user3} alt="" className="mt-[20px]   "></img>
              <h2 className="mt-[20px] font-[600px] text-[32px]  text-center  ">
                Early Prequalification <br /> and limitless Access
              </h2>
              <h2 className="mt-[2px] text-ash text-center ">
                Get Prequalified Early and have unlimited <br />
                access to your earned pay.
              </h2>
            </div>
            <div>
              <img src={user2} alt="" className="mt-[20px]  "></img>
              <h2 className="mt-[20px] font-[600px] text-[32px]  text-center ">
                Simple and Easy
              </h2>
              <h2 className="mt-[2px] text-ash text-center ">
                After All, It's Your Pay.
                <br />
                With SalaryPayDay, you can access up to 50% of your
                <br />
                earned pay before payday.
              </h2>
            </div>
            <div>
              <img src={user1} alt=" " className="mt-[20px]  "></img>
              <h2 className="mt-[20px] font-[600px] text-[32px]  text-center ">
                Visibility & Transparency
              </h2>
              <h2 className="mt-[2px] text-ash text-center ">
                Check how much you have available anytime,
                <br />
                anywhere.
              </h2>
            </div>
          </Carousel>
        </div>
    
  )
}
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// export default function InputAdornments() {
//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
//       <div>
      
//         <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//           <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-password"
//             type={showPassword ? 'text' : 'password'}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//             label="Password"
//           />
//         </FormControl>
        
//       </div>
//     </Box>
//   );
// }
//remember to add the link if you want to see this.