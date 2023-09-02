import styled from 'styled-components';

// export const Section = styled.section`
//   text-align: center;
//   border: 2px solid #4caf50;
//   border-radius: 15px;
//   padding: 30px;
//   width: 50%;

//   margin: 15px auto;
//   background-color: #f2f2f2;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// export const Title = styled.h2`
//   font-size: 32px;
//   margin-bottom: 25px;
//   color: #4caf50;
// `;

// export const StatList = styled.ul`
//   list-style: none;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   padding: 0;
//   margin: 0;
// `;

// export const Item = styled.li`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 15px;
//   margin: 10px;
//   width: 15%;
//   background-color: ${props => props.$backgroundColor || '#fff'};
//   color: white;
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
// `;

// export const Label = styled.span`
//   font-size: 20px;
//   margin-bottom: 10px;

//   &:hover,
//   &:focus {
//     text-decoration: underline;
//   }
// `;

// export const Percentage = styled.span`
//   font-size: 24px;
//   font-weight: bold;

//   &:hover,
//   &:focus {
//     text-decoration: underline;
//   }
// `;
export const Section = styled('section')(() => ({
  textAlign: 'center',
  border: '2px solid #4caf50',
  borderRadius: '15px',
  padding: '30px',
  width: '50%',
  margin: '15px auto',
  backgroundColor: '#f2f2f2',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

export const Title = styled('h2')(() => ({
  fontSize: '32px',
  marginBottom: '25px',
  color: '#4caf50',
}));

export const StatList = styled('ul')(() => ({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  padding: '0',
  margin: '0',
}));

export const Item = styled('li')(props => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '15px',
  margin: '10px',
  width: '15%',
  backgroundColor: props.$backgroundColor || '#fff',
  color: 'white',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
}));

export const Label = styled('span')(() => ({
  fontSize: '20px',
  marginBottom: '10px',
  '&:hover, &:focus': {
    textDecoration: 'underline',
  },
}));

export const Percentage = styled('span')(() => ({
  fontSize: '24px',
  fontWeight: 'bold',
  '&:hover, &:focus': {
    textDecoration: 'underline',
  },
}));
