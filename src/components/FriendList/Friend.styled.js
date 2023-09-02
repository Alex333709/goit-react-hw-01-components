import styled from 'styled-components';

// export const List = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export const ListItem = styled.li`
//   list-style: none;
//   display: flex;
//   align-items: center;
//   border: 2px solid #ccc;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   padding: 10px;
//   margin: 10px;
//   width: 50%;
//   transition: all 0.3s ease;
//   &:hover {
//     border-color: blue;
//   }
// `;

// export const Status = styled.span`
//   display: inline-block;
//   width: 20px;
//   height: 20px;
//   background-color: ${props => (props.$isOnline ? 'green' : 'red')};
//   border-radius: 50%;
//   margin-right: 10px;
// `;

// export const Avatar = styled.img`
//   width: 48px;
//   height: 48px;
//   border-radius: 50%;
//   margin-right: 10px;
// `;

// export const Name = styled.p`
//   font-size: 16px;
//   margin: 0;
// `;

export const List = styled('ul')(() => ({
  listStyle: 'none',
  padding: '0',
  margin: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const ListItem = styled('li')(() => ({
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  border: '2px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '10px',
  margin: '10px',
  width: '50%',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: 'blue',
  },
}));

export const Status = styled('span')(props => ({
  display: 'inline-block',
  width: '20px',
  height: '20px',
  backgroundColor: props.$isOnline ? 'green' : 'red',
  borderRadius: '50%',
  marginRight: '10px',
}));

export const Avatar = styled('img')(() => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  marginRight: '10px',
}));

export const Name = styled('p')(() => ({
  fontSize: '16px',
  margin: '0',
}));
