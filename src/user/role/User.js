import { Card, ResourceItem, ResourceList, TextStyle, Button, Avatar } from '@shopify/polaris';
import React from 'react';
import books from '../../data/books/book';
import { useState } from 'react';
import { useCallback } from 'react';
import Add from '../../header/component/add';

const User = () => {
    const resourceName = {
        singular: "book",
        plural: "books"
    };
    const [selectedItems, setSelectedItems] = useState([]);
    const [activeUser, setUser] = useState(false);
    const handleChangeUser = useCallback(() => setUser(!activeUser), [activeUser]);

    return (
        <Card title="User dashboard" sectioned>
            <p>User can Perform Add action only.</p>
            <Button onClick={handleChangeUser}>Add </Button>
            <ResourceList
                resourceName={resourceName}
                items={books}
                selectedItems={selectedItems}
                onSelectionChange={setSelectedItems}
                selectable
                renderItem={(item) => {
                    const { id, name, Author, price, img } = item;
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
                                    <TextStyle variation="strong">Author Name: {Author}</TextStyle>
                                </h3>
                                <h3>
                                    <TextStyle variation="strong">Price: {price}</TextStyle>
                                </h3>
                                <Add active={activeUser} handleChange={handleChangeUser} />
                            </ResourceItem>

                        </div>
                    )
                }}
            />
        </Card>

    )
}
export default User;
