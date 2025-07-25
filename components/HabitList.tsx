import { Habit } from "@/types/database";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { SwipeableHabit } from "./SwipeableHabit";

interface HabitsListProps {
  habits: Habit[];
  completedHabits: string[];
  onDeleteHabit: (id: string) => void;
  onCompleteHabit: (id: string) => void;
}

export function HabitsList({
  habits,
  completedHabits,
  onDeleteHabit,
  onCompleteHabit,
}: HabitsListProps) {
  if (habits.length === 0) {
    return (
      <View style={styles.emptyState}>
        <Text style={styles.emptyStateText}>
          No Habits yet. Add your first Habit!
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      {habits.map((habit) => (
        <SwipeableHabit
          key={habit.$id}
          habit={habit}
          isCompleted={completedHabits.includes(habit.$id)}
          onDelete={onDeleteHabit}
          onComplete={onCompleteHabit}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyStateText: {
    color: "#666666",
  },
  container: {
    flex: 1,
  },
});
export default HabitsList;