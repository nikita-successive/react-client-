import { Card, ResourceItem, ResourceList, TextStyle, Avatar } from '@shopify/polaris';
import React from 'react';
import books from '../../data/books/book';
import { useState } from 'react';
import '../AppCss.css'
const Trainee = () => {
    const resourceName = {
        singular: "book",
        plural: "books"
    };
    const [selectedItems, setSelectedItems] = useState([]);
    return (
        <Card title="Trainee dashboard" sectioned>
            <p>Trainee cannot Perform Add and Edit action.</p>
            <ResourceList
                resourceName={resourceName}
                items={books}
                selectedItems={selectedItems}
                onSelectionChange={setSelectedItems}
                selectable
                renderItem={(item) => {
                    const { id, name, Author, price,img } = item;
                    const media = <Avatar source={img} customer size="medium" name={name} />;
                    return (
                        <div>
                            <ResourceItem
                                id={id}
                                media={media}
                                accessibilityLabel={`view details for ${name}`}>
                                <h3>
                                    <TextStyle variation="strong">Book Name: {name}</TextStyle>
                                </h3>
                                <h3>
                                    <TextStyle variation="strong">Author Name:{Author}</TextStyle>
                                </h3>
                                <h3>
                                    <TextStyle variation="strong">Price:{price}</TextStyle>
                                </h3>
                            </ResourceItem>

                        </div>
                    )
                }}
            />
        </Card>

    )
}
export default Trainee;
