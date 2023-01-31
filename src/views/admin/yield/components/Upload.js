// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
// Assets
import { MdUpload } from "react-icons/md";
import Dropzone from "views/admin/profile/components/Dropzone";

export default function Upload(props) {
  const { used, total, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorSecondary = "gray.400";
  return (
    <Card {...rest} mb="20px" align="center" p="20px">
      <Flex h="100%" direction={{ base: "column", "2xl": "row" }}>
        <Flex direction="column" pe="44px">
          <Text
            color={textColorPrimary}
            fontWeight="bold"
            textAlign="start"
            fontSize="2xl"
            mt={{ base: "20px", "2xl": "50px" }}
          >
            Please fill your inputs
          </Text>
          <Text
            color={textColorSecondary}
            fontSize="md"
            my={{ base: "auto", "2xl": "10px" }}
            mx="auto"
            textAlign="start"
          >
            Stay on the pulse of distributed projects with an anline whiteboard
            to plan, coordinate and discuss
          </Text>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <input
              placeholder="PH value"
              style={{
                padding: 8,
                border: "1px solid #abdbe3",
                borderRadius: 12,
              }}
            />
            <input
              placeholder="Tempreture"
              style={{
                padding: 8,
                border: "1px solid #abdbe3",
                borderRadius: 12,
              }}
            />
            <input
              placeholder="Rainfall"
              style={{
                padding: 8,
                border: "1px solid #abdbe3",
                borderRadius: 12,
              }}
            />
            <Flex w="100%">
              <Button
                me="100%"
                mb="50px"
                w="140px"
                minW="140px"
                mt={{ base: "20px", "2xl": "auto" }}
                variant="brand"
                fontWeight="500"
              >
                Analyze
              </Button>
            </Flex>
          </div>
        </Flex>
      </Flex>
    </Card>
  );
}
