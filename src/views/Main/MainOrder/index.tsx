import { Box, Button, Card, Typography } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ClearIcon from '@mui/icons-material/Clear';





export default function MainOrder() {

    // const flag = false;

    const incrementButton = document.getElementById("incrementButton");
    const decrementButton = document.getElementById("decrementButton");
    const numberDisplay = document.getElementById("itemNumber");

    let currentNumber: number = 0; 

    const storedNumber = localStorage.getItem("currentNumber");

    if (storedNumber !== null) {
        currentNumber = parseInt(storedNumber);
    }

    if (incrementButton && decrementButton && numberDisplay) {
        numberDisplay.textContent = currentNumber.toString(); 

        incrementButton.addEventListener("click", () => {
            currentNumber++; 
            window.localStorage.setItem("currentNumber", currentNumber.toString()); 
            numberDisplay.textContent = currentNumber.toString(); 
        });

        decrementButton.addEventListener("click", () => {
            if (currentNumber > 0) {
                currentNumber--; 
                window.localStorage.setItem("currentNumber", currentNumber.toString()); 
                numberDisplay.textContent = currentNumber.toString(); 
            }
        });
    } else {
        console.log("Element not found.");
    }


    return (
        <Box sx={{ p: '20px 80px', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <Box sx={{ display: 'flex' }}>
                <Card variant='outlined' sx={{ display: 'flex', flex: 2, width: '150px', height: '240px', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    {/* {flag ? 
                    (<Typography sx={{ fontSize: '15px', fontWeight: 300 }}>메뉴를 추가해 주세요.</Typography>)
                :(<Box></Box>)} */}
                    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', flex: 1, height: '36px', backgroundColor: '#F0F8FF', alignItems: 'center' }}>
                            <Box sx={{ flex: 1, ml: '10px' }}>에스프레소</Box>
                            <Box sx={{ display: 'flex', width: '100px', mr: '10px', alignItems: 'center' }}>
                                <button id="decrementButton" style={{ color: '#FFFFFF', backgroundColor: '#008B8B', borderColor: '#FFFFFF' }}>
                                    <RemoveRoundedIcon sx={{ fontSize: 'large' }} />
                                </button>
                                <Box sx={{ ml: '10px', mr: '10px' }}>
                                    <div id="itemNumber">0</div>
                                </Box>
                                <button id="incrementButton" style={{ color: '#FFFFFF', backgroundColor: '#008B8B', borderColor: '#FFFFFF' }}>
                                    <AddRoundedIcon sx={{ fontSize: 'Large' }} />
                                </button>
                            </Box>
                            <Box sx={{ ml: '20px', mr: '20px', pr: '20px', width: '10px' }}>7,000</Box>
                            <Button sx={{ fontSize: "small" }}>
                                <ClearIcon />
                            </Button>
                        </Box>
                        <Box sx={{ display: 'flex', flex: 1, height: '36px', backgroundColor: '#F0FFFF', alignItems: 'center' }}>
                            <Box sx={{ flex: 1, ml: '10px' }}>에스프레소</Box>
                            <Box sx={{ display: 'flex', width: '100px', mr: '10px', alignItems: 'center' }}>
                                <button id="decrementButton" style={{ color: '#FFFFFF', backgroundColor: '#008B8B', borderColor: '#FFFFFF' }}>
                                    <RemoveRoundedIcon sx={{ fontSize: 'large' }} />
                                </button>
                                <Box sx={{ ml: '10px', mr: '10px' }}>
                                    <div id="itemNumber">0</div>
                                </Box>
                                <button id="incrementButton" style={{ color: '#FFFFFF', backgroundColor: '#008B8B', borderColor: '#FFFFFF' }}>
                                    <AddRoundedIcon sx={{ fontSize: 'Large' }} />
                                </button>
                            </Box>
                            <Box sx={{ ml: '20px', mr: '20px', pr: '20px', width: '10px' }}>7,000</Box>
                            <Button sx={{ fontSize: "small" }}>
                                <ClearIcon />
                            </Button>
                        </Box>
                        <Box sx={{ display: 'flex', flex: 1, height: '36px', backgroundColor: '#F0F8FF', alignItems: 'center' }}>
                            <Box sx={{ flex: 1, ml: '10px' }}>에스프레소</Box>
                            <Box sx={{ display: 'flex', width: '100px', mr: '10px', alignItems: 'center' }}>
                                <button id="decrementButton" style={{ color: '#FFFFFF', backgroundColor: '#008B8B', borderColor: '#FFFFFF' }}>
                                    <RemoveRoundedIcon sx={{ fontSize: 'large' }} />
                                </button>
                                <Box sx={{ ml: '10px', mr: '10px' }}>
                                    <div id="itemNumber">0</div>
                                </Box>
                                <button id="incrementButton" style={{ color: '#FFFFFF', backgroundColor: '#008B8B', borderColor: '#FFFFFF' }}>
                                    <AddRoundedIcon sx={{ fontSize: 'Large' }} />
                                </button>
                            </Box>
                            <Box sx={{ ml: '20px', mr: '20px', pr: '20px', width: '10px' }}>7,000</Box>
                            <Button sx={{ fontSize: "small" }}>
                                <ClearIcon />
                            </Button>
                        </Box>
                        <Box sx={{ display: 'flex', flex: 1, height: '36px', backgroundColor: '#F0FFFF', alignItems: 'center' }}>
                            <Box sx={{ flex: 1, ml: '10px' }}>에스프레소</Box>
                            <Box sx={{ display: 'flex', width: '100px', mr: '10px', alignItems: 'center' }}>
                                <button id="decrementButton" style={{ color: '#FFFFFF', backgroundColor: '#008B8B', borderColor: '#FFFFFF' }}>
                                    <RemoveRoundedIcon sx={{ fontSize: 'large' }} />
                                </button>
                                <Box sx={{ ml: '10px', mr: '10px' }}>
                                    <div id="itemNumber">0</div>
                                </Box>
                                <button id="incrementButton" style={{ color: '#FFFFFF', backgroundColor: '#008B8B', borderColor: '#FFFFFF' }}>
                                    <AddRoundedIcon sx={{ fontSize: 'Large' }} />
                                </button>
                            </Box>
                            <Box sx={{ ml: '20px', mr: '20px', pr: '20px', width: '10px' }}>7,000</Box>
                            <Button sx={{ fontSize: "small" }}>
                                <ClearIcon />
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '30px', backgroundColor: '#FFFFFF' }}>
                        <Button sx={{ flex: 1, height: '10px', width: '15px' }}>
                            <KeyboardArrowUpOutlinedIcon />
                        </Button>
                        <Button sx={{ flex: 1, height: '10px', width: '15px' }}>
                            <KeyboardArrowDownOutlinedIcon />
                        </Button>
                    </Box>
                </Card>
                <Box sx={{ height: '360px', ml: '30px' }}>
                    <Typography variant='h6' sx={{ fontSize: '25px', color: '#008B8B' }}>총 결제</Typography>
                    <Typography variant='h6' sx={{ fontSize: '25px', color: '#008B8B' }}>$ 00,000원</Typography>
                    <Box sx={{ m: '40px 0px' }}>
                        <Button variant='contained' sx={{ mt: '30px', width: '150px', height: '90px', backgroundColor: '#008B8B' }}>
                            <Typography sx={{ fontSize: '20px', fontWeight: 300 }}>결제</Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>

        </Box>

    )
}

