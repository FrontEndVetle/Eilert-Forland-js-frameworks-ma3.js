

import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
    userName: yup.string().required("First name is required"),
    password: yup
    .string()
        .required("Please write your password")
        .min(4, "Password must be atleast 4")
});

function LoginForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control name="userName" placeholder="Enter your Username" ref={register} />
                {errors.userName && <p>{errors.userName.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter your Password" ref={register} />
                {errors.password && <p>{errors.password.message}</p>}
            </Form.Group>

            <Button type="submit">Submit</Button>
        </Form>
    );
}

export default LoginForm;