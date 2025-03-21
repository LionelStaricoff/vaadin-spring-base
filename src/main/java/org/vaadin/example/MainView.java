package org.vaadin.example;

import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;


@Route
@JsModule("./views/public/index.js") // Incluye el archivo JavaScript
@CssImport("./views/public/style.css") // Incluye el archivo CSS
public class MainView extends VerticalLayout {


    public MainView(GreetService service) {

        // Use TextField for standard text input
        Div textField = new Div();
        textField.addClassName("root");



        add(textField);
    }
}
