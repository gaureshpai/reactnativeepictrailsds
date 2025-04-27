import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetProps } from "./bottomsheet.type";
import { RectButton } from "../Button";

const BottomSheet: React.FC<BottomSheetProps> = ({
  showKnob = false,
  showButton = false,
  buttonLabel = "Submit",
  onButtonPress = () => { },
  showComments = false,
  comments = [],
  onAddComment = () => { },
  onLikeComment = () => { },
  onReplyComment = () => { },
  children,
  containerStyle = {},
}) => {
  const [commentText, setCommentText] = useState<string>("");

  const handleAddComment = (): void => {
    if (commentText.trim()) {
      onAddComment(commentText);
      setCommentText("");
    }
  };

  return (
    <View style={styles.container}>
      {showKnob && (
        <View style={styles.knobContainer}>
          <View style={styles.knob} />
        </View>
      )}

      {!showComments && (
        <View style={[styles.customContentContainer, containerStyle]}>
          {children}
        </View>
      )}

      <View style={styles.contentContainer}>
        {showComments && (
          <View style={styles.commentsContainer}>
            {comments.map((comment, index) => (
              <View key={comment.id || index} style={styles.commentItem}>
                <View style={styles.commentHeader}>
                  <View style={styles.userAvatar}>
                    <Text style={styles.avatarText}>
                      {comment.userInitials || "AB"}
                    </Text>
                  </View>
                  <Text style={styles.userName}>
                    {comment.userName ||
                      "Motoholic Serene Adventure in my motorbike"}
                  </Text>
                </View>

                <View style={styles.commentActions}>
                  <TouchableOpacity
                    style={styles.likeButton}
                    onPress={() => onLikeComment(index)}
                  >
                    <View style={styles.likeIcon}>
                      <Ionicons name="heart-outline" size={16} />
                    </View>
                    <Text style={styles.likeCount}>{comment.likes || 1}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.replyButton}
                    onPress={() => onReplyComment(index)}
                  >
                    <Text style={styles.replyText}>Reply</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.commentTime}>
                  {comment.time || "12 hrs ago"}
                </Text>
              </View>
            ))}

            <View style={styles.addCommentContainer}>
              <View style={styles.userAvatar}>
                <Text style={styles.avatarText}>A</Text>
              </View>
              <TextInput
                style={styles.commentInput}
                placeholder="Comment goes here"
                placeholderTextColor={"#888888"}
                value={commentText}
                onChangeText={setCommentText}
              />
              <TouchableOpacity
                style={styles.postButton}
                onPress={handleAddComment}
              >
                <Text style={styles.postButtonText}>Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {showButton && (
          <RectButton label={buttonLabel} onPress={onButtonPress} />
        )}
      </View>
      <View style={[styles.indicatorContainer, { justifyContent: "center" }]}>
        <View style={[styles.indicator, { backgroundColor: "#000000" }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: "hidden",
    width: "100%",
  },
  knobContainer: {
    alignItems: "center",
    paddingVertical: 8,
  },
  knob: {
    width: 40,
    height: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 2,
  },
  customContentContainer: {
    width: "100%",
    minHeight: 200,
    padding: 5,
    marginTop: 10,
    backgroundColor: "#eee",
  },
  contentContainer: {
    paddingVertical: 16,
  },
  commentsContainer: {
    marginBottom: 16,
  },
  commentItem: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  commentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  userAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  avatarText: {
    color: "white",
    fontWeight: "bold",
  },
  userName: {
    fontWeight: "500",
    flex: 1,
  },
  commentActions: {
    flexDirection: "row",
    marginTop: 8,
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  likeIcon: {
    fontSize: 18,
    marginRight: 4,
  },
  likeCount: {
    fontSize: 14,
  },
  replyButton: {
    marginLeft: 8,
  },
  replyText: {
    color: "#666",
    fontWeight: "500",
  },
  commentTime: {
    color: "#999",
    fontSize: 12,
    marginTop: 6,
  },
  addCommentContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 8,
  },
  commentInput: {
    backgroundColor: "#E0E0E0",
    marginHorizontal: 8,
    flex: 1,
    height: 36,
    paddingHorizontal: 8,
  },
  postButton: {
    backgroundColor: "#333",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  postButtonText: {
    color: "white",
    fontWeight: "500",
  },
  indicatorContainer: {
    width: "100%",
    paddingHorizontal: 40,
    flexDirection: "row",
    marginTop: 0,
  },
  indicator: {
    height: 5,
    width: 120,
    marginBottom: 8,
    borderRadius: 5,
  },
});

export default BottomSheet;