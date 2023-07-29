import {
  Document,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    border: "1px solid #f3f3f3",
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  institutionName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  studentInfo: {
    fontSize: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  studentInfoItem: {
    flex: 1,
  },
  table: {
    marginTop: 20,
    border: "1px solid #333",
  },
  tableHeader: {
    fontSize: 18,
    backgroundColor: "#f0f0f0",
    padding: 5,
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1px solid #333",
  },
  tableCell: {
    fontSize: 14,
    flex: 1,
    padding: 5,
  },
  tableFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    borderTop: "1px solid #333",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
  totalLabel: {
    padding: 5,
  },
  totalValue: {
    flex: 1,
    padding: 5,
    textAlign: "right",
  },
});

const LivePreview = ({ data }) => {
  const { name, studentId, subjects } = data;

  return (
    <PDFViewer width="100%" height={600}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.institutionName}>Coding Academy</Text>
            <View style={styles.studentInfo}>
              <Text style={styles.studentInfoItem}>Name: {name}</Text>
              <Text style={styles.studentInfoItem}>Class: Eight</Text>
              <Text style={styles.studentInfoItem}>Roll: {studentId}</Text>
            </View>
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Subject</Text>
              <Text style={styles.tableCell}>Marks</Text>
              <Text style={styles.tableCell}>Grade</Text> {/* New */}
            </View>
            {subjects.map((subject, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{subject.name}</Text>
                <Text style={styles.tableCell}>{subject.mark}</Text>
                <Text style={styles.tableCell}>{subject.grade}</Text>{" "}
                {/* New */}
              </View>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default LivePreview;
