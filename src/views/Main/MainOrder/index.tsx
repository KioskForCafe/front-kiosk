import { useEffect, useState } from 'react';
import { Box, Button, Card, IconButton, List, ListItem, ListItemText, ListSubheader, Typography } from '@mui/material';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelectedMenuStore } from 'src/stores';
import {  SelectedMenu } from 'src/interfaces/SelectedMenu.interface';

export default function MainOrder() {

    const { selectedMenuList, setSelectedMenuList } = useSelectedMenuStore();
    const [total, setTotal] = useState<number>(0);
    const increaseButtonHandler = (selectedMenu: SelectedMenu) => {
        const modifiedMenuList = selectedMenuList.map(menu => {
            if (menu.menuId === selectedMenu.menuId && menu.menuPrice === selectedMenu.menuPrice) {
                const modifiedMenu: SelectedMenu = { ...menu, menuCount: menu.menuCount + 1 };
                return modifiedMenu;
            }
            return menu;
        });
        setSelectedMenuList(modifiedMenuList);
    }

    const decreaseButtonHandler = (selectedMenu: SelectedMenu) => {
        if (selectedMenu.menuCount === 1) return;
        const modifiedMenuList = selectedMenuList.map(menu => {
            if (menu.menuId === selectedMenu.menuId && menu.menuPrice === selectedMenu.menuPrice) {
                const modifiedMenu: SelectedMenu = { ...menu, menuCount: menu.menuCount - 1 };
                return modifiedMenu;
            }
            return menu;
        });
        setSelectedMenuList(modifiedMenuList);
    }

    useEffect(() => {
        let total = 0;
        selectedMenuList.forEach((menu) => {
            total += menu.menuCount * menu.menuPrice;
        })
        setTotal(total);
    }, [selectedMenuList]);

    return (
        <Box sx={{ p: '20px 80px', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <Box sx={{ display: 'flex' }}>
                <Card variant='outlined' sx={{ display: 'flex', flex: 2, width: '150px', height: '240px', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 1700,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                        }}          
                    >
                        <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                            {selectedMenuList.map((menu) => (
                                <Box sx={{ display: 'flex', height: '60px', backgroundColor: '#F0F8FF', alignItems: 'center' }}>
                                    <Box sx={{ flex: 1, ml: '10px' }}>{menu.menuName}</Box>
                                    <Box sx={{ display: 'flex', width: '100px', mr: '10px', alignItems: 'center' }}>
                                        <button
                                            id="decrementButton"
                                            style={{ color: '#FFFFFF', backgroundColor: '#008B8B', borderColor: '#FFFFFF' }}
                                            onClick={() => decreaseButtonHandler(menu)}
                                        >
                                            <RemoveRoundedIcon sx={{ fontSize: 'large' }} />
                                        </button>
                                        <Box sx={{ ml: '10px', mr: '10px' }}>
                                            <div id="itemNumber">{menu.menuCount}</div>
                                        </Box>
                                        <button
                                            id="incrementButton"
                                            style={{ color: '#FFFFFF', backgroundColor: '#008B8B', borderColor: '#FFFFFF' }}
                                            onClick={() => increaseButtonHandler(menu)}
                                        >
                                            <AddRoundedIcon sx={{ fontSize: 'Large' }} />
                                        </button>
                                    </Box>
                                    <Box sx={{ ml: '20px', mr: '20px', pr: '20px', width: '10px' }}>{menu.menuPrice * menu.menuCount}</Box>
                                    <IconButton aria-label="delete" size="small" sx={{ mr: '20px' }} >
                                        <ClearIcon fontSize="inherit" />
                                    </IconButton>
                                </Box>
                            ))}
                        </Box>

                    </List>

                </Card>
                <Box sx={{ height: '360px', ml: '30px' }}>
                    <Typography variant='h6' sx={{ fontSize: '25px', color: '#008B8B' }}>총 결제</Typography>
                    <Typography variant='h6' sx={{ fontSize: '25px', color: '#008B8B' }}>{total}원</Typography>
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

