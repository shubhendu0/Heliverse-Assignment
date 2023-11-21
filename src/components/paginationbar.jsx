import * as React from 'react';
import { Box, Pagination, PaginationItem} from '@mui/material';
import { ArrowForward, ArrowBack} from '@mui/icons-material';
import { useSelector } from 'react-redux';

const PaginationBar = ({currentPage, setCurrentPage}) => {
    const totalPages = useSelector(state => state.user.totalPages)

    return (
        <Box
        width="100vw"
        margin="40px 0px"
        display="flex"
        justifyContent="center"
        >
            <Pagination 
            width="60vw"        
            count={totalPages}
            page={currentPage}
            onChange={(event, page) => setCurrentPage(page)}
            renderItem={(item) => (
                <PaginationItem
                slots={{ previous: ArrowBack, next: ArrowForward }}
                {...item}
                />
            )}
            />
        </Box>
    );
}

export default PaginationBar;
