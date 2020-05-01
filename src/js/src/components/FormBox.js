import * as React from "react";
import { Form, FormGroup, Input } from "reactstrap";

export function FormBox() {
    const [userName, setUserName] = React.useState("");
    const [userAge, setUserAge] = React.useState("");
    const [loading] = React.useState(false);

    return (
        <div className="six columns">
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
                    name="name"
                    value={userName}
                    placeholder="john"
                    onChange={e => setUserName(e.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <Input
                    type="age"
                    name="age"
                    value={userAge}
                    placeholder="20"
                    onChange={e => setUserAge(e.target.value)}
                />
            </FormGroup>

            <button className="button-primary" type="submit" disabled={loading} block={true}>
                {loading ? "Loading..." : "Enter"}
            </button>
        </Form>
    </div>
    );
}
