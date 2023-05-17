// import "./Verification.css";
// import { useLocation } from 'react-router-dom';

// const Verification = () => {
//   const location = useLocation();
//   const token = location.state.token;

//   const [error, setError] = useState("");

//   const handleVerification = async () => {
//     try {
//       const response = await axios.post('/api/verifyToken', {
//         token
//       });
//       // Handle successful verification
//     } catch (error) {
//       setError('Invalid or expired token');
//     }
//   };

//   return (
//     <div>
//       <h2>Verification</h2>
//       <p>Please enter the verification code that was sent to your email.</p>
//       <form>
//         <div>
//           <label htmlFor="verificationCode">Verification Code:</label>
//           <input
//             type="text"
//             id="verificationCode"
//             name="verificationCode"
//             required
//           />
//         </div>
//         <button type="button" onClick={handleVerification}>Verify</button>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Verification;
