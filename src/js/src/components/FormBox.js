import * as React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

export function FormBox() {
    const [userName, setUserName] = React.useState("");
    const [userDOB, setUserDOB] = React.useState("");
    const [loading] = React.useState(false);

    return (
        <Form
            onSubmit={e => {
                e.preventDefault();
                // Auth handler
            }}
        >
            <h1>Enter your name and date of birth:</h1>
            <br />
            <FormGroup>
                <Input
                    type="name"
                    name="email"
                    value={userName}
                    placeholder="john"
                    onChange={e => setUserName(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="DOB"
                    name="DOB"
                    value={userDOB}
                    placeholder="1991"
                    onChange={e => setUserDOB(e.target.value)}
                />
            </FormGroup>
            <Button type="submit" disabled={loading} block={true}>
                {loading ? "Loading..." : "Enter"}
            </Button>
        </Form>
    );
}
