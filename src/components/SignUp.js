import React, { Component } from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Redirect } from 'react-router-dom';

import { SIZES } from '../styles';

export default function SignUp(props) {
    props.sx.height = SIZES.content.height,
    props.sx.minHeight = SIZES.content.height,
    props.sx.maxHeight = SIZES.content.height

    const {signUp, isLogin, ...restProps} = props

    if (isLogin) {
        return <Redirect to="/" />
    }

    const [values, setValues] = React.useState({
        password: '',
        nickname: '',
        email: '',
        username: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
        ...values,
        showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleButton = () => {
        signUp(values.username, values.password, values.nickname, values.email)
    }

    return (
        <Stack
            {...restProps}
            justifyContent="center"
            spacing={2}
            alignItems="center"
        >
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-username"
                    type="text"
                    value={values.username}
                    onChange={handleChange('username')}
                    label="username"
                />
            </FormControl>

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-nickname">Nickname</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-nickname"
                    type="text"
                    value={values.nickname}
                    onChange={handleChange('nickname')}
                    label="nickname"
                />
            </FormControl>

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-email"
                    type="email"
                    value={values.email}
                    onChange={handleChange('email')}
                    label="email"
                />
            </FormControl>

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>

            <Button variant="contained" color="primary" onClick={handleButton} >
                Sign up
            </Button>
        </Stack>
    )
}
