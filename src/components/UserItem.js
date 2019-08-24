import React from 'react';

const UserItem = (props) => {
    return (
        <tr className={(props.user.id ===props.selectedUser)?'table-primary':''} onClick={() => props.userSelected(props.user)}>
            <th scope="row">{props.user.id}</th>
            <td>{props.user.name}</td>
            <td>{props.user.role}</td>
            <td>{props.user.active}</td>
        </tr>
    );
};

export default UserItem;
