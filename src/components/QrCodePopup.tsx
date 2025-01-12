import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Divider,
} from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

interface QrCodePopupProps {
  open: boolean
  onClose: () => void
  qrCodeImageUrl?: string
  message?: string
}

const QrCodePopup: React.FC<QrCodePopupProps> = ({
  open,
  onClose,
  qrCodeImageUrl,
  message,
}) => (
  <Dialog
    open={open}
    onClose={onClose}
    maxWidth="sm"
    fullWidth
    PaperProps={{
      sx: {
        borderRadius: 4,
        overflow: 'hidden',
      },
    }}
  >
    <DialogTitle
      sx={{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        bgcolor: 'primary.main',
        color: 'white',
      }}
    >
      {message ? '🎉 Donation Received! 🎉' : 'Scan this QR Code'}
    </DialogTitle>
    <Divider />
    <DialogContent
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      {message ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/celebration.gif"
            alt="Celebration"
            width={120}
            height={120}
            style={{ borderRadius: '50%' }}
          />
        </motion.div>
      ) : (
        qrCodeImageUrl && (
          <Box
            sx={{
              textAlign: 'center',
              mt: 2,
            }}
          >
            <Image
              src={qrCodeImageUrl}
              alt="QR Code"
              width={256}
              height={256}
            />
            <Typography variant="body2" color="textSecondary" mt={1}>
              Scan the QR code to donate or share!
            </Typography>
          </Box>
        )
      )}
    </DialogContent>
    <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
      <Button
        onClick={onClose}
        variant="contained"
        color="primary"
        size="large"
        sx={{ borderRadius: 8, textTransform: 'none', px: 4 }}
      >
        Close
      </Button>
    </DialogActions>
  </Dialog>
)

export default QrCodePopup
