import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import org.apache.poi.ss.usermodel.*;

public class ExcelToDatabase {

    public static void main(String[] args) {
        String jdbcURL = "jdbc:mysql://localhost:3306/excel_data";
        String username = "root";
        String password = "";

        String excelFilePath = "D:\\excel\\employees.xlsx";

        try (Connection connection = DriverManager.getConnection(jdbcURL, username, password)) {
            File excelFile = new File(excelFilePath);
            FileInputStream inputStream = new FileInputStream(excelFile);

            Workbook workbook = WorkbookFactory.create(inputStream);
            Sheet sheet = workbook.getSheetAt(0);

            for (Row row : sheet) {
                String name = row.getCell(0).getStringCellValue();
                int age = (int) row.getCell(1).getNumericCellValue();
                double salary = row.getCell(2).getNumericCellValue();

                String sql = "INSERT INTO employee (name, age, salary) VALUES (?, ?, ?)";
                PreparedStatement statement = connection.prepareStatement(sql);
                statement.setString(1, name);
                statement.setInt(2, age);
                statement.setDouble(3, salary);

                statement.executeUpdate();
                statement.close();
            }

            workbook.close();
            inputStream.close();

            System.out.println("Data imported successfully.");
        } catch (IOException | SQLException e) {
            e.printStackTrace();
        }
    }
}
