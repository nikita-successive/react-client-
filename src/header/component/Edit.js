import React from 'react';
import {  Modal } from '@shopify/polaris';
import { TextField, Form, FormLayout } from '@shopify/polaris';
import { useState } from 'react';
const Edit = (props) => {
    const {active,handleChange}=props;
    const [author, setAuthor] = useState("");
    const [book, setBook] = useState("");
    const [price, setPrice] = useState("");
    return (
        <div>
            <Modal
                open={active}
                onClose={handleChange}
                title="Edit Book"
                primaryAction={{
                    content: 'Save',
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
export default Edit;
