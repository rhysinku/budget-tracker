import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";

function Calculator() {

    return (
        <>
         <div className={'container mx-auto'}>
             <Table>
                 <TableHeader>
                     <TableRow>
                         <TableHead>Name</TableHead>
                         <TableHead>Value</TableHead>
                     </TableRow>
                 </TableHeader>
                 <TableBody>
                     <TableRow>
                         <TableCell>
                             Bills
                         </TableCell>
                         <TableCell>
                             1000
                         </TableCell>
                     </TableRow>
                 </TableBody>
             </Table>
         </div>
        </>
    );
}

export default Calculator;