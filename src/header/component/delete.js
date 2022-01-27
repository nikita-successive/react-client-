import React from 'react';
import {  Modal } from '@shopify/polaris';
const Delete = (props) => {
    const {active,handleChange}=props;
    return (
        <div>
            <Modal
                open={active}
                onClose={handleChange}
                title="Delete Book"
                primaryAction={{
                    content: 'Yes ',
                    onAction: handleChange,
                }}
                secondaryActions={[
                    {
                        content: 'No',
                        onAction: handleChange,
                    },
                ]}
            >
                <Modal.Section>
                <p>Do You Really Want to Delete this Book?</p>
                </Modal.Section>
            </Modal>
           
        </div>
    )
}
export default Delete;
