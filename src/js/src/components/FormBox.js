import * as React from "react";
import { Form, FormGroup, Input } from "reactstrap";

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
            <label>Enter your name and date of birth:</label>
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
            <button className="button-primary" type="submit" disabled={loading} block={true}>
                {loading ? "Loading..." : "Enter"}
            </button>
        </Form>
    );
}
