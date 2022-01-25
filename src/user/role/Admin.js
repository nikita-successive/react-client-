import { Card, ResourceItem, ResourceList, TextStyle, Button,  Avatar } from '@shopify/polaris';
import React from 'react';
import books from '../../data/books/book';
import { useState, useCallback } from 'react';
import Add from '../../header/component/Add';
import Edit from '../../header/component/Edit';
import Delete from '../../header/component/Delete';
const Admin = () => {
    const resourceName = {
        singular: "book",
        plural: "books"
    };
    const [selectedItems, setSelectedItems] = useState([]);
    const [active, setActive] = useState(false);
    const [activeEdit,setEdit] = useState(false);
    const [activeDelete,setDelete] = useState(false);


    const handleChange = useCallback(() => setActive(!active), [active]);
    const handleChangeEdit = useCallback(() => setEdit(!activeEdit), [activeEdit]);
    const handleChangeDelete = useCallback(() => setDelete(!activeDelete), [activeDelete]);
    return (
        
        <Card title="Admin dashboard" sectioned>
            <p>Admin can Perform Add and Edit action only.</p>
            <Button onClick={handleChange}>Add</Button>
            <ResourceList
                resourceName={resourceName}
                items={books}
                selectedItems={selectedItems}
                onSelectionChange={setSelectedItems}
                selectable
                renderItem={(item) => {
                    const { id, name, Author, price ,img} = item;
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
                                <Add active={active} handleChange={handleChange}/>
                                <Edit active={activeEdit} handleChange={handleChangeEdit}/>
                                <Delete active={activeDelete} handleChange={handleChangeDelete}/>
                                <Button onClick={handleChangeEdit}>Edit</Button>
                                <Button onClick={handleChangeDelete}>Delete</Button>
                            </ResourceItem>

                        </div>
                    )
                }}
            />
        </Card>
        
    )

}
export default Admin;
