// components/TableExamples.tsx
import {
    SnakeTable,
    SnakeTableHead,
    SnakeTableBody,
    SnakeTableRow,
    SnakeTableCell,
  } from '../../components/table/SnakeTable';
import { tableVariants } from '../../components/table/SnakeTable';
  
  const DemoTable = ({ variant }: { variant: keyof typeof tableVariants }) => (
    <div className="mb-10">
      <h2 className="text-xl font-semibold capitalize mb-4">{String(variant)} Table</h2>
      <SnakeTable variant={variant}>
        <SnakeTableHead >
          <SnakeTableRow variant={variant}>
            <SnakeTableCell  variant={variant}>
              Name
            </SnakeTableCell>
            <SnakeTableCell  variant={variant}>
              Age
            </SnakeTableCell>
            <SnakeTableCell  variant={variant}>
              City
            </SnakeTableCell>
            <SnakeTableCell  variant={variant}>
              country
            </SnakeTableCell>
            <SnakeTableCell  variant={variant}>
              mobile
            </SnakeTableCell>
            <SnakeTableCell  variant={variant}>
              hobbies
            </SnakeTableCell>
          </SnakeTableRow>
        </SnakeTableHead>
        <SnakeTableBody>
          <SnakeTableRow variant={variant}>
            <SnakeTableCell variant={variant}>Dhruv</SnakeTableCell>
            <SnakeTableCell variant={variant}>23</SnakeTableCell>
            <SnakeTableCell variant={variant}>Pune</SnakeTableCell>
            <SnakeTableCell variant={variant}>India</SnakeTableCell>
            <SnakeTableCell variant={variant}>1234567890</SnakeTableCell>
            <SnakeTableCell variant={variant}>Cricket</SnakeTableCell>
          </SnakeTableRow>
          <SnakeTableRow variant={variant}>
            <SnakeTableCell variant={variant}>Riya</SnakeTableCell>
            <SnakeTableCell variant={variant}>25</SnakeTableCell>
            <SnakeTableCell variant={variant}>Mumbai</SnakeTableCell>
            <SnakeTableCell variant={variant}>India</SnakeTableCell>
            <SnakeTableCell variant={variant}>0987654321</SnakeTableCell>
            <SnakeTableCell variant={variant}>Reading</SnakeTableCell>
          </SnakeTableRow>
          <SnakeTableRow variant={variant}>
            <SnakeTableCell variant={variant}>Aman</SnakeTableCell>
            <SnakeTableCell variant={variant}>30</SnakeTableCell>
            <SnakeTableCell variant={variant}>Delhi</SnakeTableCell>
            <SnakeTableCell variant={variant}>India</SnakeTableCell>
            <SnakeTableCell variant={variant}>1122334455</SnakeTableCell>
            <SnakeTableCell variant={variant}>Traveling</SnakeTableCell>
          </SnakeTableRow>
        </SnakeTableBody>
      </SnakeTable>
    </div>
  );
  
  export default function TableExamples() {
    return (
      <div className="space-y-8">
        <DemoTable variant="default" />
        <DemoTable variant="striped" />
        <DemoTable variant="bordered" />
        <DemoTable variant="compact" />
        <DemoTable variant="modern" />
        <DemoTable variant="hoverEffect" />
        <DemoTable variant="minimal" />
      </div>
    );
  }
  