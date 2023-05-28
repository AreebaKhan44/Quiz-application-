import {Button ,Typography } from "@mui/material";
import {Box} from "@mui/system";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {handleAmountChange,handleScoreChange} from "../redux/actions";

const FinalScreen = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const {score}=useSelector(state=>state);

  const handleBackToSettings=()=>{
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    navigate.push("/");

  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>Final Score{score}</Typography>
      <Button onClick={handleBackToSettings} variant="outlined">back to settings!</Button>

    </Box>
  )
}

export default FinalScreen
