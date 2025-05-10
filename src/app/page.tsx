import {Tooltip, Hamburger, ToogleSwitch, SnakeTransferList} from '../components/index'
import SnakeUiButton from '../components/latest/SnakeUiButton';
import {
  SnakeTable,
  SnakeTableHead,
  SnakeTableBody,
  SnakeTableRow,
  SnakeTableCell,
} from '../components/table/Table';


export default function Home() {
  const users = [
    { name: 'Dhruvaraj', email: 'dhruv@example.com' },
    { name: 'Ankit', email: 'ankit@example.com' },
  ];
  
  return ( 
    <div className="flex flex-col justify-center items-center gap-4 mt-60">

      <SnakeTransferList
        initialLeft={[
          {id:1, content: <span>Apple</span> },
          {id:2, content: <span>Banana</span> },
          {id:3, content: <span>Apple1</span> },
          {id:4, content: <span>Banana2</span> },
        ]}
        initialRight={[
          {id:5,content: <span>Grapes</span> },
          {id:6,content: <span>Watermelon</span> },
          {id:7,content: <span>Grapes1</span> },
          {id:8,content: <span>Watermelon2</span> },
        ]}
      />

      {/* <ToogleSwitch
        enableIconSwitch
        enableCheckmark
      /> */}

      {/* <SnakeTransferList /> */}

      {/* <p className='text-[18px]'>Test UI Library</p> */}

      {/* <Hamburger 
        varient='outline'
        iconClassName='text-amber-200'
        subIconposition='top'
        icons={[
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>,
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>,
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
        ]}
      >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
      </Hamburger> */}

      {/* <Tooltip 
      iconClassName='text-red-500'
      tooltipPosition='bottom'
      tooltipText="hello"
      >
        f
      </Tooltip> */}

      {/* <SnakeUiButton />

    <SnakeTable className="my-4 border border-gray-200 rounded-lg">
      <SnakeTableHead>
        <SnakeTableRow>
          <SnakeTableCell as="th">Name</SnakeTableCell>
          <SnakeTableCell as="th">Email</SnakeTableCell>
        </SnakeTableRow>
      </SnakeTableHead>

      <SnakeTableBody>
        {users.map((user, index) => (
          <SnakeTableRow key={index}>
            <SnakeTableCell>{user.name}</SnakeTableCell>
            <SnakeTableCell>{user.email}</SnakeTableCell>
          </SnakeTableRow>
        ))}
      </SnakeTableBody>
    </SnakeTable> */}
  


      {/* <Button size='small' width='300px'>
        Click Me
      </Button>
      <Button width='600px' className='text-red-500'>
        Click Me
      </Button>
      <Button size='large' width='800px'>
        Click Me
      </Button> */}

      {/* <ToogleSwitch /> */}
    </div>
  );
}