import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";

import { VisibilityOff, Visibility } from "@mui/icons-material";
import {useState, Dispatch, SetStateAction} from 'react'


interface Props {
  setLoginView: Dispatch<SetStateAction<boolean>>;
}

export default function SignUpCardView({setLoginView}: Props) {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  return (
    <Box display='flex' sx={{ height: '100%', flexDirection: "column", justifyContent: "space-between" }}>
      <Box>
        <Typography variant="h5" fontWeight='700' sx={{color: '#008B8B'}}>Service Center KIOSK</Typography>
        <FormControl fullWidth variant="standard" sx={{ mt: "40px" }}>
          <InputLabel>아이디</InputLabel>
          <Input type="text" endAdornment={
          <InputAdornment position="end">
          </InputAdornment>
        } 
        />
        </FormControl>
        <FormControl fullWidth variant="standard" sx={{ mt: "60px" }}>
          <InputLabel>비밀번호</InputLabel>
          <Input
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>
        <FormControl fullWidth variant="standard" sx={{ mt: "60px" }}>
          <InputLabel>비밀번호 확인</InputLabel>
          <Input
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>
        <Typography textAlign="center" sx={{mt: '40px'}}>
          이미 계정이 있으신가요?
          <Typography
            component="span"
            fontWeight={900}
            onClick={() => setLoginView(true)}
          >
            {" "}
            로그인
          </Typography>
        </Typography>
      </Box>
    </Box>
  )
}
