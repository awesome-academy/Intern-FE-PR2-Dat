import { Box, Link, Typography } from '@material-ui/core';
import Stack from '@material-ui/core/Stack';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from '@material-ui/icons/Google';
import TwitterIcon from '@material-ui/icons/Twitter';

const Sharing = () => (
    <Box
        sx={{
            flexDirection: 'row',
            display: 'inline-flex',
            justifyContent: 'space-between',
            width: '80%',
            '& .MuiLink-root:hover': {
                color: 'primary.main',
                transition: 'all 0.5s',
            },
        }}
    >
        <Typography variant='subtitle' component='span' gutterBottom>
            Chia sẻ
        </Typography>
        <Stack direction='row' spacing={2}>
            <Link
                href='http://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvietponics.vn%2Fproduct%2Fatiso-bong-tuoi-artichoke%2F'
                underline='none'
                target='_blank'
                color='common.black'
            >
                <FacebookIcon />
            </Link>
            <Link
                href='http://twitter.com/share?text=Atiso%20b%C3%B4ng%20t%C6%B0%C6%A1i&url=https%3A%2F%2Fvietponics.vn%2Fproduct%2Fatiso-bong-tuoi-artichoke%2F'
                underline='none'
                target='_blank'
                color='common.black'
            >
                <TwitterIcon />
            </Link>
            <Link
                href='https://plus.google.com/share?url=https%3A%2F%2Fvietponics.vn%2Fproduct%2Fatiso-bong-tuoi-artichoke%2F'
                underline='none'
                target='_blank'
                color='common.black'
            >
                <GoogleIcon />
            </Link>
        </Stack>
    </Box>
);

Sharing.propTypes = {};

export default Sharing;
