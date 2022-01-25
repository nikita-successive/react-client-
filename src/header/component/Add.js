import React from 'react';
import {  Modal } from '@shopify/polaris';
import { TextField, Form, FormLayout } from '@shopify/polaris';
import { useState } from 'react';
const Add = (props) => {
    const {active,handleChange}=props;
    const [author, setAuthor] = useState("");
    const [book, setBook] = useState("");
    const [price, setPrice] = useState("");
    return (
        <div>
            <Modal
                open={active}
                onClose={handleChange}
                title="Add Book"
                primaryAction={{
                    content: 'Add ',
                    onAction: handleChange,
                }}
                secondaryActions={[
                    {
                        content: 'Close',
                        onAction: handleChange,
                    },
                ]}
            >
                <Modal.Section>
                <Form>
                <FormLayout>
                    <div>
                        <TextField label="Author Name:" autoComplete="off" align="left" type="text" value={author}
                            onChange={(newValue) => setAuthor(newValue)}
                        />
                        <br />
                        <TextField label="Book Name:" autoComplete="off" align="left" type="text" value={book}
                            onChange={(newValue) => setBook(newValue)}
                        />
                        <br />
                        <TextField label="Price:" autoComplete="off" align="left" type="text" value={price}
                            onChange={(newValue) => setPrice(newValue)}
                        />
                    </div>
                </FormLayout>

            </Form>
                </Modal.Section>
            </Modal>
           
        </div>
    )

}
export default Add;
