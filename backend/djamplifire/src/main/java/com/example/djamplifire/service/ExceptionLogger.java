package com.example.djamplifire.service;


import com.example.djamplifire.model.LoggedObject;
import com.example.djamplifire.repository.LogRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.text.SimpleDateFormat;


/**
 * This is a Service Class with the purpose of logging errors or logging the stack trace to a
 * database.
 *
 * @author Chris Oh (Credit to Kyle Plummer for the code, I refactored it)
 * @version 1.0
 * @since 11/11/2021
 */

@Service
@Transactional
public class ExceptionLogger {
    private LogRepo repo;

    @Autowired
    public ExceptionLogger (LogRepo repo) {
        this.repo = repo;
    }

    public void writeLog(String message, int level) {
        LoggedObject LogOb = new LoggedObject(getCurrentDateTime(), formatLogEntry(message), level);
        repo.save(LogOb);
    }

    private String getCurrentDateTime() {
        SimpleDateFormat f = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return f.format(System.currentTimeMillis());
    }

    private String formatLogEntry(String message) {
        StackTraceElement[] stackTraceElements = Thread.currentThread().getStackTrace();
        String stackTrace = "";
        for (StackTraceElement element : stackTraceElements) {
            stackTrace += "\n" + element;
        }
        return String.format("[%s] %s%n", stackTrace, message);
    }
}
