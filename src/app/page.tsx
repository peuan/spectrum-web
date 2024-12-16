"use client";

import CheckIcon from "@/components/icons/CheckIcon";
import { Box, Button, Icon, IconButton, Stack } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Stack gap={2}>
      <Button variant="contained">Hello</Button>
      <Icon
        sx={{ fontSize: "2rem", color: "primary.main" }}
        component={CheckIcon}
      />
      <Image src="/icons/logo.svg" width={77} height={59} alt="logo" />
      <Box>
        <IconButton >
          <Icon
            sx={{ fontSize: "2rem", color: "" }}
            component={CheckIcon}
          />
        </IconButton>
      </Box>
    </Stack>
  );
}
