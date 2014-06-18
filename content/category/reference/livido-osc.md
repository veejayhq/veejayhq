---
title: LiViDO/OSC
name: livido-osc
type: post
date: "Sun, 14 Nov 2010 16:26:37 +0000"
author: niels
---
![](veejay-icon.png)  


# Technical Specification  


## LiViDO/OSC Technical Specification for [Veejay](http://www.veejayhq.net)  
(C) Niels Elburg 2010  

*Drafting LiViDO/OSC specification for Veejay*  


# Versions  
LiViDO/OSC Nov 11th , 2010  


*     

*   *added "identifier" to PORT_TYPE_PLUGIN_INFO*
*     

*   *added "organization" to PORT_TYPE_PLUGIN_INFO*
*     

*   *added "path" to PORT_TYPE_FILTER_INSTANCE  
    *
*     

LiViDO/OSC April. 11th , 2010  


*     

*   added OSC extension
*     

Livido 1.0 beta version 2005- 2010  

(C) Gabriel "Salsaman" Finch, Niels Elburg, Dennis "Jaromil" Rojo, Daniel Fischer, Martin Bayer, Kentaro Fukuchi, Andraz Tori 2005.  


## LIVIDO_API_VERSION  
This is defined as 102 for this version of the specification.  


## LIVIDO GENERAL DESIGN  
Livido is an architecture to enable interchange of video processing plugins between video applications in a standardized and compatible way.  

This document describes the LiViDO/OSC extension for Veejay  


## LiViDO  
Livido plugin is a shared object that application can load. Inside a plugin there can be implementations of many different filters, each filter implementation is called a filter class. Host gets to know a list of classes a plugin provides when calling livido_setup function. A class description includes descriptions of inputs and outputs filter can handle. Inputs and outputs can be channels and parameters. Descriptions of acceptable types of channels and parameters are called channel templates and parameter templates respectively. Host prepares for instantination of the filter by setting input and output channels and input parameters and then instantinates a filter. Host can use process_func() on that instance until it deinits an instance.  
All passing of data between hosts and plugins is done trough ports, ports are the only C structures defined in Livido.  


## OSC  
**OpenSound Control**(OSC) is a content format for sharing (music) performance data (such as gestures, parameters and note sequenecs) between (musical) instruments.  

Each LiViDO plugin exports its capability set to the outside world using a OSC namespace  

**Mandatory properties**:  


*     

*   "instance" : LIVIDO_PORT_TYPE_FILTER_INSTANCE
*     

*   "HOST_osc_cb" : Host OSC callback function  


        typedef   void  (*generic_osc_cb_f)(void *userdata, void *port, void *value );  


*     

*   "HOST_osc_data" : LIVIDO_PORT_TYPE_VOIDPTR: Host private data
*     

*   "root" : LIVIDO_PORT_TYPE_VOIDPTR: Plugin's OSC namespace
*     


### OSC Namespace  


#### Container  


*     

*   "name" : LIVIDO_ATOM_TYPE_STRING : Name
*     

*   "description" : LIVIDO_ATOM_TYPE_STRING : Short descriptive information
*     

*   "help" : LIVIDO_ATOM_TYPE_STRING : Help information
*     

*   "format" : LIVIDO_ATOM_TYPE_STRING : OSC parameter format
*     

*   "path" : LIVIDO_ATOM_TYPE_STRING : OSC path to identify this instance. For example /myorg/myname/myplugin/
*     

*   "template" : LIVIDO_ATOM_TYPE_FILTERCLASS: Port reference to Plugins's Filter Class
*     


#### Method  


*     

*   "name" : LIVIDO_ATOM_TYPE_STRING:
*     

*   "format" : LIVIDO_ATOM_TYPE_STRING:
*     

*   "description" : LIVIDO_ATOM_TYPE_DESCRIPTION:
*     

*   "parent" : LIVIDO_ATOM_TYPE_VOIDPTR:
*     

*   "path" : LIVIDO_ATOM_TYPE_STRING: OSC path
*     

*   "instance" : LIVIDO_ATOM_TYPE_VOIDPTR:
*     


#### Naming convention  


*     

*   All names are lowercase alphanumeric characters [a-z0-9] and the character '_'
*     

*   The root of a plugin's namespace is '/' followed by the plugins name
*     

*   The only reserved keywords are 'ID', 'bind' and 'unbind' to allow (de)coupling of Plugins
*     

*   The '*' (asterix) denotes a numeric identifier to uniquely identify a plugin's instance
*     

*   The '?' returns a plugins full namespace including all parameters and channels
*     


    /<Plugin Name>/<ID*>/<Parameter Name>/<Parameter Value>  
    /<Plugin Name>/<ID*>/<Channel Name>/bind/<Plugin Name>/<ID*>/<Channel Name>  
    /<Plugin Name>/<ID*>/<Channel Name>/unbind/<Plugin Name>/<ID*>/<Channel Name>  
    /<Plugin Name>/<ID*>/<Parameter Name>/bind/<Plugin Name>/<ID*>/<Parameter Name>  
    /<Plugin Name>/<ID*>/<Parameter Name>/unbind/<Plugin Name>/<ID*>/<Parameter Name>  


## PORTS  
A *port* is a set of one or more *properties*:  

Each port has a mandatory property called "type" (see below), depending upon "type" property port has other mandatory and optional properties.  

"type" can be one of:  


*     

*   LIVIDO_PORT_TYPE_PLUGIN_INFO : Information about plugin and list of filter classes it includes
*     

*   LIVIDO_PORT_TYPE_FILTER_CLASS : Descriptive information about single filter class
*     

*   LIVIDO_PORT_TYPE_CHANNEL_TEMPLATE : Information about what kinds of channels filter accepts
*     

*   LIVIDO_PORT_TYPE_PARAMETER_TEMPLATE : Information about what kinds of parameters filter has
*     

*   LIVIDO_PORT_TYPE_FILTER_INSTANCE : All data about an instance
*     

*   LIVIDO_PORT_TYPE_CHANNEL : Instantination of a channel
*     

*   LIVIDO_PORT_TYPE_PARAMETER : Instantination of a parameter
*     


*     

*   LIVIDO_PORT_TYPE_GUI : described in the separate [livido GUI extension](/wiki/TechnicalSpecCurrentGUI) (TODO)
*     

"type" is a single valued property with atom_type LIVIDO_ATOM_TYPE_INT.  

The "type" is passed as a parameter in the livido_port_new() function as:  


    livido_port_t *livido_port_new( int port_type );  

This returns a pointer to newly allocated port with the "type" property set to *port_type*.  

Port types >=512 are available for custom use.  


## PROPERTIES  
As mentioned above, each port is a set of one or more properties.  

A property has:  


*     

*   a *key* (which is a non-NULL string - (const char *) ASCII encoded)
*     

*   a *value* (0 or more elements)
*     

*   *number of elements* (>=0) contained in the value field.
*     

*   an *atom_type*
*     

*   a bitmap *flags* field
*     


## PROPERTY RESTRICTIONS  
Access to properties is restricted in certain cases, these are restriction flags used troughout this document:  


*     

*   HOSTSET - Read-only for the plugin
*     

*   PLUGINSET - Read-only for the host
*     

*   FINAL - Not allowed to change after it was set
*     

*   MANDATORY - mandatory property that MUST exist at some point in time
*     

*   OPTIONAL - property that COULD exist
*     

Properties inherit restriction of the port where we do not specify otherwise.  


## ATOM TYPES  
LiViDO offers the following **fundamental** types (number <64):  


*     

*   LIVIDO_ATOM_TYPE_INT : signed int32_t
*     

*   LIVIDO_ATOM_TYPE_DOUBLE : corresponds to C type "double"
*     

*   LIVIDO_ATOM_TYPE_BOOLEAN : signed int32_t, constrained to take values 0 (FALSE) or 1 (TRUE)
*     

*   LIVIDO_ATOM_TYPE_STRING : array of char
*     

**Note**: STRINGS are all utf-8 encoded in Livido, except property Keys, which are ASCII encoded.  

**Pointer** types (number>=64 and <512):  


*     

*   LIVIDO_ATOM_TYPE_VOIDPTR : corresponds to C void * type
*     

*   LIVIDO_ATOM_TYPE_PORTPTR : livido_port_t * : a void * to a livido_property_t, currently used only for channel properties "same_as_size", "same_as_palette")
*     

*   LIVIDO_ATOM_TYPE_INIT_F : pointer to a livido_init_f function
*     

*   LIVIDO_ATOM_TYPE_PROCESS_F : pointer to a livido_process_f function
*     

*   LIVIDO_ATOM_TYPE_DEINIT_F : pointer to a livido_deinit_f function
*     

Types >=512 are available for custom use. Custom atom types must be pointer types, since livido cannot guess their byte size or type.  


## PORT TYPE PLUGIN INFO  
Port enables a plugin function livido_setup to tell the host what filter classes are available. Port is PLUGINSET and FINAL after livido_setup() finishes.  


*     

*   "type" == LIVIDO_PORT_TYPE_PLUGIN_INFO
*     

**Mandatory properties**:  


*     

*   "filters" : LIVIDO_ATOM_TYPE_PORTPTR : atom or array of livido_filter_t,
*     

*   "maintainer" : LIVIDO_ATOM_TYPE_STRING : maintainer of plugin package
*     

*   "version" : LIVIDO_ATOM_TYPE_STRING : plugin package version
*     

*   "api_version" : LIVIDO_ATOM_TYPE_INT : livido api version: MUST be set to the LIVIDO_API_VERSION as defined above in this spec
*     

*   "identifier": LIVIDO_ATOM_TYPE_STRING: a unique identifier for this plugin. the field is mandatory. Use a DNS prefix. For example ( veejayhq.net.Negation )
*     

**Optional properties**:  


*     

*   "url" : LIVIDO_ATOM_TYPE_STRING : URL of plugin package
*     


## PORT TYPE FILTER CLASS  
Port type filter class is used to describe all properties of a single filter class. Port is PLUGINSET and FINAL after livido_setup().  

"type" == LIVIDO_PORT_TYPE_FILTER_CLASS  

**Mandatory properties**:  


*     

*   "name" : LIVIDO_ATOM_TYPE_STRING : the filter name
*     

*   "author" : LIVIDO_ATOM_TYPE_STRING : the filter author(s)
*     

*   "organization": LIVIDO_ATOM_TYPE_STRING: name of organization providing the plugin
*     

*   "description" : LIVIDO_ATOM_TYPE_STRING : filter description
*     

*   "version" : LIVIDO_ATOM_TYPE_INT : filter version.
*     

*   "license" : LIVIDO_ATOM_TYPE_STRING : license of filter
*     

*   "flags" : LIVIDO_ATOM_TYPE_INT : bitmap of filter flags
*     

*   "init_func" : LIVIDO_ATOM_TYPE_INIT_F : pointer to a init_func()
*     

*   "process_func" : LIVIDO_ATOM_TYPE_PROCESS_F : pointer to a process_func()
*     

*   "deinit_func" : LIVIDO_ATOM_TYPE_DEINIT_F : pointer to a deinit_func()
*     

*   "in_channel_templates" : LIVIDO_ATOM_TYPE_PORTPTR, list of 0 or more elements: input ports of input channel templates, **type** of the referenced port MUST be LIVIDO_PORT_TYPE_CHANNEL_TEMPLATE
*     

*   "out_channel_templates" : LIVIDO_ATOM_TYPE_PORTPTR, list of 0 or more elements : ports of output channel templates, **type** of the referenced port MUST be LIVIDO_PORT_TYPE_CHANNEL_TEMPLATE
*     

*   "in_parameter_templates" : LIVIDO_ATOM_TYPE_PORTPTR, list of 0 or more elements : ports of input parameter templates, **type** of the referenced port MUST be LIVIDO_PORT_TYPE_PARAMETER_TEMPLATE
*     

*   "out_parameter_templates" : LIVIDO_ATOM_TYPE_PORTPTR, list of 0 or more elements : ports of output parameter templates, **type** of the referenced port MUST be LIVIDO_PORT_TYPE_PARAMETER_TEMPLATE
*     

**Optional properties**:  


*     

*   "url" : LIVIDO_ATOM_TYPE_STRING
*     


## PORT TYPE FILTER INSTANCE  
Port type filter instance is used to hold all data that are related to a single instance of the filter all properties of a single filter class. Port is HOSTSET after livido_setup.  

"type" == LIVIDO_PORT_TYPE_FILTER_INSTANCE  

**Mandatory properties**:  


*     

*   "filter_class" : LIVIDO_ATOM_TYPE_PORTPTR : Pointer to a filter class port this filter instance is based on
*     

*   "in_channels" : LIVIDO_ATOM_TYPE_PORTPTR, list of 0 or more elements : ports of input channels, **type** of the referenced port MUST be LIVIDO_PORT_TYPE_CHANNEL
*     

*   "out_channels" : LIVIDO_ATOM_TYPE_PORTPTR, list of 0 or more elements : ports of output channels , **type** of the referenced port MUST be LIVIDO_PORT_TYPE_CHANNEL
*     

*   "in_parameters" : LIVIDO_ATOM_TYPE_PORTPTR, list of 0 or more elements : ports of input parameters, **type** of the referenced port MUST be LIVIDO_PORT_TYPE_PARAMETER
*     

*   "out_parameters" : LIVIDO_ATOM_TYPE_PORTPTR, list of 0 or more elements : ports of output parameters, **type** of the referenced port MUST be LIVIDO_PORT_TYPE_PARAMETER
*     

**Optional properties**:  


*     

*   Every filter instance can have its internal properties stored inside this port, and host MUST ignore them. Those internal properties MUST have keys prefixed with "PLUGIN_"
*     

*   Every host can have its internal properties stored inside this port, and filter MUST ignore them. Those internal properties MUST have keys prefixed with "HOST_"
*     

*   "path" : LIVIDO_ATOM_TYPE_STRING: relative or absolute path to plugin data directory. Field is set by host. Plugin can use it to load extra data during initialization.
*     


## PORT TYPE CHANNEL TEMPLATE  
Port type channel template is used as a description of a single channel (input or output) a filter can handle. Port is PLUGINSET and FINAL after livido_setup.  


*     

*   "type" == LIVIDO_PORT_TYPE_CHANNEL_TEMPLATE
*     

**Mandatory properties**:  


*     

*   "name" : LIVIDO_ATOM_TYPE_STRING : name of the channel, MUST be unique across all channels in the filter class
*     

*   "flags" : LIVIDO_ATOM_TYPE_INT : bitmap of channel_flags that plugin sets
*     

*   "palette_list" : LIVIDO_ATOM_TYPE_INT : the plugin sets this to an array of allowed palettes for the channel. Its order is plugin's preference for a palette
*     

**Optional properties**:  


*     

*   "description" : LIVIDO_ATOM_TYPE_STRING : description of this channel
*     

*   "width" : LIVIDO_ATOM_TYPE_INT : If set, frame width in pixels that a plugin can handle. If it is set, host is forbidden to set the width in channel instance to anything else
*     

*   "height" : LIVIDO_ATOM_TYPE_INT : If set, frame height in pixels that a plugin can handle. If it is set, host is forbidden to set the height in channel instance to anything else
*     

*   "same_as_size" : LIVIDO_ATOM_TYPE_PORTPTR : plugin can set this to indicate that this channel must match "height" and "width" with another channel. The pointer points to another in/out channel template
*     

*   "same_as_palette" : LIVIDO_ATOM_TYPE_PORTPTR : plugin can set this to indicate that this channel must match "current_palette" with another channel. The pointer points to another in/out channel template
*     

*   "optional" : LIVIDO_ATOM_TYPE_BOOLEAN : the plugin may set this to TRUE for channels that can be left out at initialization time.
*     

**Restrictions to properties**  

Each channel template can only reference another through *_same_as or be referenced by another, not both.  

There can be only backward references in the array. For example channel 2 can have *_same_as to channel 1, but not the other way around.  

Output channels can, however, reference input channels at will  


## PORT TYPE CHANNEL  
Port type channel is used as a fixation of channel properties that the host sets and plugin reads to know what it is getting. Port is HOSTSET after init_func(). Channels should be a one-one match with channel templates (same order, same number).  


*     

*   "type" == LIVIDO_PORT_TYPE_CHANNEL
*     

**Mandatory properties**:  


*     

*   "parent_template" : LIVIDO_ATOM_TYPE_PORT : Pointer to a channel template port this channel instance is based on. FINAL.
*     

*   "timecode" : LIVIDO_ATOM_TYPE_DOUBLE : time in seconds for this channel, host can choose what exactly it represents
*     

*   "width" : LIVIDO_ATOM_TYPE_INT : The chosen frame width in pixels
*     

*   "height" : LIVIDO_ATOM_TYPE_INT : The chosen height in pixels
*     

*   "current_palette" : LIVIDO_ATOM_TYPE_INT: The chosen palette, which must be one of the palettes contained in "palette_list" of a channel template
*     

*   "pixel_data" : LIVIDO_ATOM_TYPE_VOIDPTR : array of size 4 of pointers to the image pixels data. depending on the value of "current_palette", only the first pointer is used for packed modes and in planar modes each plane has its own pointer.
*     

*   "rowstrides" : LIVIDO_ATOM_TYPE_INT : array of size 4 carrying the row width of EACH PLANE in bytes (include padding)
*     

**Optional properties**:  


*     

*   "fps" : LIVIDO_ATOM_TYPE_DOUBLE : fps of channel;
*     

*   "pixel_aspect_ratio" : LIVIDO_ATOM_TYPE_DOUBLE : physical aspect ratio of the pixel of the image (pixel aspect ratio different than 1.0 means pixels are non-square)
*     

*   "v_shift" : LIVIDO_ATOM_TYPE_INT : vertical shift in the pixels of the sampling of crominance planes for planar yuv palletes
*     

*   "h_shift" : LIVIDO_ATOM_TYPE_INT : horizontal shift in the pixels of the sampling of crominance planes for planar yuv palletes
*     

*   "YUV_sampling" : LIVIDO_ATOM_TYPE_INT : Sampling type for YUV palettes, enum defined below
*     

*   "interlacing" : LIVIDO_ATOM_TYPE_INT : Interlacing type, defined below. if not present, the image must be NON INTERLACED
*     

*   "disabled" : LIVIDO_ATOM_TYPE_BOOLEAN : the host MAY set this to TRUE before calling init_func() if the coresponding channel template has optional property set to true
*     


## PORT TYPE PARAMETER TEMPLATE  
Port type parameter template is used as a description of a single parameter (input or output) filter can handle. Port is PLUGINSET and FINAL after livido_setup.  

**Mandatory properties**:  


*     

*   "name" : LIVIDO_ATOM_TYPE_STRING : name of the parameter, MUST be unique across the in_parameter_templates/out_parameter_templates
*     

*   "default" : any of the fundamental atom type : sane default value of the parameter
*     

*   "kind" : LIVIDO_ATOM_TYPE_STRING : Tells the host the _minimal_ needed information to be able to present a parameter. Depending of the value of "kind", there are additional properties that are mandatory or optional. The rules for additional properties are spelled out below.
*     

**Optional properties**:  


*     

*   "flags" : LIVIDO_ATOM_TYPE_INT : Plugin sets this to LIVIDO_PARAMETER_CHANGE_UNADVISED if a change in the "value" of instance of the parameter causes some kind of internal reinit of the plugin (realtime hosts can use this to be able to avoid slow behaviour of he plugins).
*     

*   "description" : LIVIDO_ATOM_TYPE_STRING : parameter description, FINAL
*     


#### PARAMETER CONSTRAINING  
Parameter constraining in Livido is minimalistic, all GUI related stuff is to be defined in separate document. Parameter constraining is derived from additional properties defined for parameter template that depend on the value of the property "kind".  

The **kind** is a mandatory property of every parameter, the defined values are:  


*     

*   "INDEX" (discrete)
*     

*   "NUMBER" (continuous)
*     

*   "TEXT" (utf-8)
*     

*   "SWITCH" (boolean)
*     

*   "COLOR_RGBA"
*     

*   "COORDINATE"
*     

Depending on the "kind" parameter atom type and mandatory additional properties MUST BE:  


*     

*   "INDEX"
*     

Kind index means a discret number, which can be used for index choosing or passing integer values. It is constrained by min and max: min <= value <= max  
The **default** property can only be of atom type LIVIDO_ATOM_TYPE_INT.  
Additional properties that kind causes:  


*     

*   **min** : LIVIDO_ATOM_TYPE_INT : minimal value of the parameter, MANDATORY
*     

*   **max** : LIVIDO_ATOM_TYPE_INT : maximal value of the parameter, MANDATORY
*     

*   **wrap** : LIVIDO_ATOM_TYPE_BOOLEAN : indicates that the "value" should wrap when going below min or above max, OPTIONAL
*     


*     

*   "NUMBER"
*     

Kind index means a continuous number, which can be used for index choosing or passing integer values. It is constrained by min and max: min <= value <= max  
The **default** property can only be of atom type LIVIDO_ATOM_TYPE_DOUBLE.  
Additional properties that kind causes:  


*     

*   **min** : LIVIDO_ATOM_TYPE_DOUBLE : minimal value of the parameter, MANDATORY for in parameters, OPTIONAL for out parameters.
*     

*   **max** : LIVIDO_ATOM_TYPE_DOUBLE : maximal value of the parameter, MANDATORY for in parameters, OPTIONAL for out parameters.
*     

*   **wrap** : LIVIDO_ATOM_TYPE_BOOLEAN : indicates that the "value" should wraped when going below min or above max, OPTIONAL
*     

*   **transition** : LIVIDO_ATOM_TYPE_BOOLEAN : Indicates that this parameter is transition, OPTIONAL
*     


*     

*   "TEXT"
*     

Kind text means a string, which can be used for passing strings.  
The **default** property can only be of atom type LIVIDO_ATOM_TYPE_STRING.  


*     

*   "SWITCH"
*     

Kind switch can be used for passing yes/no choices.  
The **default** property can only be of atom type LIVIDO_ATOM_TYPE_BOOLEAN.  


*     

*   "COLOR_RGBA"
*     

Kind color can be used for passing colors. Colors are represented as a list of 3 or 4 elements of type LIVIDO_ATOM_TYPE_DOUBLE. Depending on the default value, host knows if it has to pass 3 or 4 elements in the list to filter. Values of elements consecutively are red, green, blue and alpha, values are generally between 0.0 and 1.0.ccc  
Additional properties that kind causes:  


*     

*   **min** : LIVIDO_ATOM_TYPE_DOUBLE array of N elements: minimal value of the parameter, MANDATORY
*     

*   **max** : LIVIDO_ATOM_TYPE_DOUBLE array of N elements: maximal value of the parameter, MANDATORY
*     


*     

*   "COORDINATE"
*     

Kind coordinate can be used for passing 2d normalized cartesian coordinats. Coordinates are represented as a list of 2 elements of type LIVIDO_ATOM_TYPE_DOUBLE. First value in a list presents an x coordinate and second one y in cartesian coordinates, coordinates inside the picture they relate to are considered to be between 0.0 and 1.0  
The **default** property can only be of atom type LIVIDO_ATOM_TYPE_DOUBLE and an array of 2 elements.  
Additional properties that kind causes:  


*     

*   **min** : LIVIDO_ATOM_TYPE_DOUBLE array of 2 elements: minimal value of the parameter, MANDATORY
*     

*   **max** : LIVIDO_ATOM_TYPE_DOUBLE array of 2 elements: maximal value of the parameter, MANDATORY
*     


## PORT TYPE PARAMETER  
Port type parameter is used for passing a single (input or output) . Input parameters are HOSTSET and output parameters are PLUGINSET. Parameters should be a one-one match with channel templates (same order, same number).  

**Mandatory properties**:  


*     

*   "parent_template" : LIVIDO_ATOM_TYPE_PORT : Pointer to a parameter template port this parameter instance is based on
*     

*   "value" : type of the value MUST match the type of **default** property of the parent_template
*     


## GETTING/SETTING PROPERTY VALUES  
On livido_property_set(), the host/plugin programmer does not need to worry about allocating and freeing memory for the data to store. The model (or more precisely the Mediation layer) will take care of that for you. If you store an object the model will make a copy and store that. Later, when you set a new value in this property, the model will automatically livido_free() the old value and make a copy of the new value and store the copy.  

The exception to this is any atom type of type PTR. If you allocate a chunk of data or a complex structure only the pointer value is stored (!). The model does not know anything about the content of the data your pointer refers to so it will not make a copy. Instead, you need to allocate and free the memory yourself in this case.  

The plugin and host programmer can both retrieve and set values by Key.  

On livido_property_get(), Livido will copy the data stored in the property, except for pointer types. For pointer types only the reference to the memory block is copied. The programmer should first allocate a memory area for livido_property_get() to copy to.  

For setting pointer types, host/plugin must pass in a size_t array with the atom sizes.  


## LIVIDO CORE FUNCTIONS  
All host implementations must implement and offer the following core functions. The functions reside inside a host and plugin dynamically links to them upon loading.  


*     

*   livido_port_t *livido_port_new (int port_type)
*     

*   void livido_port_free (livido_port_t *port) // only used by host
*     

*   char **livido_list_properties (livido_port_t *port) // returns NULL terminated char * array of properties
*     

*   int livido_property_set (livido_port_t *port, const char *key, int atom_type, int num_elems, void *value) // returns a livido error
*     

*   int livido_property_get (livido_port_t *port, const char *key, int idx, void *value) // returns a livido error
*     


*     

*   int livido_property_num_elements (livido_port_t *port, const char *key)
*     

*   size_t livido_property_element_size (livido_port_t *port, const char *key, int idx)
*     

*   int livido_property_atom_type(livido_port_t *port, const char *key)
*     

*   void *livido_malloc_f (size_t size)
*     

*   void livido_free_f (void *ptr)
*     

*   void *livido_memset_f (void *s, int c, size_t n)
*     

*   void *livido_memcpy_f (void *dest, const void *src, size_t n)
*     

**Notes**:  

livido_port_new() will set the "type" property to *port_type*, and will set it readonly.  

livido_property_set() will create the property if the property does not exist.  

livido_property_set() will return LIVIDO_ERROR_PROPERTY_READONLY if the property has the flag bit LIVIDO_PROPERTY_READONLY set.  

livido_property_set() will return an error LIVIDO_ERROR_WRONG_ATOM_TYPE if you try to change the atom_type of a property.  

For livido_property_set(), num_elems can be 0 and value can then be NULL. In this way, just the atom_type of the property can be set.  

The *sizes* field of livido_property_set() is only used for pointer type values. It should be an array of size num_elems. For fundamental types, the sizes field should be set to NULL.  

livido_property_get() will return LIVIDO_ERROR_NOSUCH_PROPERTY if a property does not exist. In this way the existence of a property can be determined. To assist with this, livido_property_get() can be called with a NULL void * value. The function will then not attempt to copy the value, but will return either LIVIDO_ERROR_NOSUCH_PROPERTY, or LIVIDO_NO_ERROR depending on whether the property exists or not.  

The return values of livido_property_num_elements(), livido_property_element_size(), livido_property_atom_type(), and livido_property_get_readonly() are all undefined if the property does not exist.  

The void * for livido_property_set() and livido_property_get() is a (void *) typecast to/from an array of the appropriate type:  
e.g. for LIVIDO_ATOM_TYPE_INT it is an int *. The number of elements in the array must match num_elems in livido_property_set().  

Functions livido_malloc_f(), livido_free_f(), livido_memset_f(), livido_memcpy_f() have exactly the same semantics as malloc, free(), memset() and memcpy() from libc. Their purpose is to allow a host to provide a plugin with the application-specific memory managment. Plugins MUST NOT use malloc, free and memset, but have to use livido counterparts.  


## PLUGIN FUNCTIONS  
The only symbol plugin MUST export is livido_setup() function pointer, all other information is passed through respective ports (classes, functions, etc...)  


#### livido_setup  


    livido_port_t *livido_setup(void);  

This function returns a PLUGIN INFO port that specifies what is the content of this plugin - which filter classes it has, who is the maintainer, etc.  

Plugin implements livido_setup() in following way: the PLUGIN INFO port is first created by using livido_port_new().  
The individual filters are then created and added to the property "filters" in the PLUGIN INFO port.  
If no filters can be created (because of memory or other problems), the function should return NULL.  

The returned port MUST have **type** LIVIDO_PORT_TYPE_PLUGIN_INFO.  


#### init_func  


    int init_func(livido_port_t *)  

The port MUST have **type** LIVIDO_PORT_TYPE_FILTER_INSTANCE  

The host calls this and passes in the desired filter.  
The filter port instance passed to the init_func MUST have been correctly setup to match the filter class it relats to, this means that all the mandatory properties of input and output channels and of input parameters MUST be set.  
The function returns a livido error code (see below).  

The init_func() function allows the plugin to create any internal memory structures it needs; plugin store internal data as properties that have keys prefixed with "PLUGIN_" (see the definition of filter intance port)  


#### process_func  


    int process_func(livido_port_t *, double timestamp)  

The port MUST have **type** LIVIDO_PORT_TYPE_FILTER_INSTANCE  

host calls this for each processing cycle; the plugin can do its frame processing here. The function returns a livido error code (see below). Timestamp is the presentation time in seconds (can be e.g. time since playback start). The function returns a livido error code (see below).  


#### deinit_func  


    int deinit_func(livido_port_t *)  

The port MUST have **type** LIVIDO_PORT_TYPE_FILTER_INSTANCE  

host calls this to allow the plugin to free() any internal memory. Following this the host may free() the instance's port. The plugin does not need to free any ports or parameters, the host should take care of this.c  


## OUTLINE LIVIDO PROCESS FLOW OVERVIEW  


*     

*   Host loads plugin (dlopen)
*     

*   Host calls the livido_setup() function.
*     

*   in livido_setup(), for each filter class, the plugin creates and initializes the port of a type LIVIDO_PORT_TYPE_FILTER_CLASS and adds it to the **filter_list** property of the returned port.
*     


*     

*   Host creates a FILTER_INSTANCE: Host examines the in_channel and out_channel ports, and sets the "disabled" flag for any optional channels it does not wish to use. It also checks "palette_list", selects a palette it would like to start using on that channel and sets the chosen value in the "current_palette" property. It also sets the sizes ("width" and "height" properties) if the plugin left them as zero. All input parameters have to have values set at this point. This means host now has a port that it will instantiate.
*     


*     

*   Host calls init_func() from the filter info port, passing a pointer to a FILTER_INSTANCE it would like to instantiate.
*     

*   Plugin now knows the channel sizes, palettes and which channels are in use. The plugin may now livido_malloc() internal data.
*     


*     

*   Host may now change parameter values (respecting "max" and "min" properties) and it after that it may call process_func() in the plugin, passing in the initialised FILTER_INSTANCE.
*     

*   When the host has finished with the FILTER_INSTANCE, or if it needs to re-initialise it, the host must call deinit_func() in the plugin, passing in a pointer to the FILTER_INSTANCE. The plugin MUST now livido_free() any internally allocated data.
*     


*     

*   Host can now livido_port_free() the FILTER_INSTANCE, or it can adjust the non-final properties of the ports used and reuse the FILTER_INSTANCE by calling init_func() once more.
*     


## LIVIDO FLAGS AND TYPES  


#### Livido palette types  
Palettes are all unsigned in LiViDO.  

Some palettes have aliases; these are shown on the same line.  

**RGB Palettes**  
Palette numbers >0 and <512  


    LIVIDO_PALETTE_RGB888         LIVIDO_PALETTE_RGB24  
    LIVIDO_PALETTE_BGR888         LIVIDO_PALETTE_BGR24  
    LIVIDO_PALETTE_RGBA8888       LIVIDO_PALETTE_RGBA32  
    LIVIDO_PALETTE_ARGB8888       LIVIDO_PALETTE_ARGB32  
    LIVIDO_PALETTE_RGBFLOAT  
    LIVIDO_PALETTE_RGBAFLOAT  
    LIVIDO_PALETTE_RGB565  

**YUV Palettes**  
Palette numbers >=512 and <1024  

Ranges are 16-235 for Y, 16 - 240 for U and V.  


    LIVIDO_PALETTE_YUV422P           LIVIDO_PALETTE_YV16  
    [Official name 'YV16', 8 bit Y plane followed by 8  
    bit 2x1 subsampled V and U planes. Planar.]  

    LIVIDO_PALETTE_YUV420P           LIVIDO_PALETTE_YV12  
    [8 bit Y plane followed by 8 bit 2x2 subsampled V and U planes. Planar  
    (Official name YV12)]  

    LIVIDO_PALETTE_YVU420P           LIVIDO_PALETTE_I420  
    [Same as YUV420P , but U and V are swapped. Planar.]  

    LIVIDO_PALETTE_YUV444P  
    [Unofficial , 8 bit Y plane followed by 8 bit U and V planes, no  
    subsampling. Planar.]  

    LIVIDO_PALETTE_YUVA4444P         LIVIDO_PALETTE_YUV4444P  
    [Unofficial, like YUV444P but with Alpha. Planar.]  

    LIVIDO_PALETTE_YUYV8888  
    [Like YUV 4:2:2 but with different component ordering within the  
    u_int32 macropixel. Packed.]  

    LIVIDO_PALETTE_UYVY8888  
    [YUV 4:2:2 (Y sample at every pixel, U and V sampled at every second  
    pixel horizontally on each line). A macropixel contains 2 pixels in 1  
    u_int32. Packed.]  

    LIVIDO_PALETTE_YUV411  
    [IEEE 1394 Digital Camera 1.04 spec. Is packed YUV format  
    with a 6 pixel macroblock structure containing 4 pixels.  
    Ordering is U2 Y0 Y1 V2 Y2 Y3. Uses same bandwith as YUV420P  
    Only used for SMPTE DV NTSC.]  

**Alpha Palettes**  
Palette numbers >=1024 and <2048  

Alpha palettes have two uses: 1) for masks, 2) to split colour inputs into single colour channels, or to combine single colour channels into a combined channel. The order of colour channels is the same as the order in the combined channel. For example if an input in RGB24 palette is split into 3 non-mask alpha channels, then the alpha channels will be in the order: Red, Green, Blue. A single non-mask alpha channel would represent the luminance.  


    LIVIDO_PALETTE_A1  
    LIVIDO_PALETTE_A8  
    LIVIDO_PALETTE_AFLOAT  

Palette numbers >=2048 are available for custom palettes.  


#### Filter flags  


*     

*   LIVIDO_FILTER_NON_REALTIME
*     


>   
> 
> 
> > non-realtime filter property: the filter is too slow to use in realtime processing.  
>   


*     

*   LIVIDO_FILTER_CAN_DO_INPLACE
*     


>   
> 
> 
> > If this property is set, the filter can do inplace operations.  
> > Hosts can select this mode by setting "pixel_data" for the first out_channel to NULL.  
> > Plugin will then return the output in "pixel_data" of the first in_channel.  
> > This can save a memcpy() in the host.  
>   


*     

*   LIVIDO_FILTER_STATEFUL
*     


>   
> 
> 
> > plugin is stateful ; it has information about what occurred previously. I.e. it has internal state data.  
>   


*     

*   LIVIDO_FILTER_IS_CONVERTER
*     


>   
> 
> 
> > This flag bit should be set if the plugin does not alter the image pixels except for resizing or palette conversion between in channel and out channel(s). It should only be set for the following types of plugins: plugins which only resize the in frame to out frame(s); plugins which only convert the palette from in frame to out frame(s), plugins which simply duplicate the in frame to out frame(s). It is used to assist with categorisation of the plugin type.  
>   
Flag bits >=30 are available for custom flags.  


#### Channel flags  


*     

*   LIVIDO_CHANNEL_CHANGE_UNADVISED
*     


>   
> 
> 
> > plugin MAY use this flag to tell the host, that changing of channel size causes possibly unwanted behaviour of the filter. Unwanted behaviour can for example be reseting the accumulated values which causes the visual result of filter to change in unexpected way or maybe the next call to process function will take disproportional amount of time due to reinitialization. Host is safe to ignore the flag and plugin MUST still be useful, though functionality may suffer.  
>   


*     

*   LIVIDO_CHANNEL_PALETTE_UNADVISED
*     


>   
> 
> 
> > plugin MAY use this flag to tell the host, that changing of channel palette causes possibly unwanted behaviour of the filter. Unwanted behaviour can for example be reseting the accumulated values which causes the visual result of filter to change in unexpected way or maybe the next call to process function will take disproportional amount of time due to reinitialization. Host is safe to ignore the flag and plugin MUST still be useful, though functionality may suffer.  
>   
Flag bits >=30 are available for custom flags.  


#### Parameter flags  


*     

*   LIVIDO_PARAMETER_CHANGE_UNADIVSED
*     


>   
> 
> 
> > plugin MAY use this flag to tell the host, that changing of this parameter causes possibly unwanted behaviour of the filter. Unwanted behaviour can for example be reseting the accumulated values which causes the visual result of filter to change in unexpected way or maybe the next call to process function will take disproportional amount of time due to reinitialization. Host is safe to ignore the flag and plugin MUST still be useful, though functionality may suffer.  
>   
Flag bits >=30 are available for custom flags.  


#### Property flags  


*     

*   LIVIDO_PROPERTY_READONLY
*     

Flag bits >=30 are available for custom flags.  


#### YUV sampling types  


*     

*   LIVIDO_YUV_SAMPLING_NONE : No subsampling (always YUV 4:4:4)
*     


*     

*   LIVIDO_YUV_SAMPLING_SMPTE : Chroma is sampled at half the horizontal frequency and is aligned horizontally with luma samples (YUV 4:2:2)
*     


*     

*   LIVIDO_YUV_SAMPLING_JPEG : Chroma is sampled at half the horizontal and half the vertical frequency. (YUV 4:2:0). Chroma samples are centered between luma samples.
*     


*     

*   LIVIDO_YUV_SAMPLING_MPEG2 : Same as JPEG, but Chroma samples are horizontally aligned and vertically centered between luma samples. There is notion of fields. (YUV 4:2:0)
*     


*     

*   LIVIDO_YUV_SAMPLING_DVPAL : Subsampling per field, Chroma samples are located above luma samples, but CB and CR samples are located on alternate lines (YUV 4:2:0)
*     


*     

*   LIVIDO_YUV_SAMPLING_DVNTSC : Chroma is sampled at 1/4 the horizontal frequency as luma but at full vertical frequency. The chroma samples are horizontally aligned with luma samples. (YUV 4:1:1)
*     

Sampling types >=1024 are available for custom samplings.  


#### Interlace types  


*     

*   LIVIDO_INTERLACE_NONE
*     

*   LIVIDO_INTERLACE_TOPFIRST
*     

*   LIVIDO_INTERLACE_BOTTOMFIRST
*     

*   LIVIDO_INTERLACE_PROGRESSIVE
*     

Interlace types >=1024 are available for custom interlacing.  


## Livido errors  


*     

*   LIVIDO_NO_ERROR
*     


>   
> 
> 
> > return code means no problem  
>   


*     

*   LIVIDO_ERROR_MEMORY_ALLOCATION
*     


>   
> 
> 
> > memory allocation by the filter has failed  
>   


*     

*   LIVIDO_ERROR_PROPERTY_READONLY
*     


>   
> 
> 
> > plugin/host tried to set readonly property; returned from livido_property_set()  
>   


*     

*   LIVIDO_ERROR_NOSUCH_ELEMENT
*     


>   
> 
> 
> > plugin/host tried to read value of an invalid element number in a property; returned from livido_property_get()  
>   


*     

*   LIVIDO_ERROR_NOSUCH_PROPERTY
*     


>   
> 
> 
> > property does not exist for the specified port; returned from livido_property_get()  
>   


*     

*   LIVIDO_ERROR_WRONG_ATOM_TYPE
*     


>   
> 
> 
> > once the atom_type of a property is set, you cannot change it. livido_property_set() will return this error if you attempt such a thing, and the value of the property will not be amended.  
>   


*     

*   LIVIDO_ERROR_TOO_MANY_INSTANCES
*     


>   
> 
> 
> > can't create: plugin allows only limited number of filter instances, returned from init_func()  
>   


*     

*   LIVIDO_ERROR_HARDWARE
*     


>   
> 
> 
> > there was an error initialising hardware for the filter; returned from init_func()  
>   
Error numbers >=1024 are available for custom errors.  


## livido.h  


    /* LiViDO is free software; you can redistribute it and/or  
    modify it under the terms of the GNU Lesser General Public  
    License as published by the Free Software Foundation; either  
    version 2.1 of the License, or (at your option) any later version.  

    LiViDO is distributed in the hope that it will be useful,  
    but WITHOUT ANY WARRANTY; without even the implied warranty of  
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU  
    Lesser General Public License for more details.  

    You should have received a copy of the GNU Lesser General Public  
    License along with this source code; if not, write to the Free Software  
    Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA  

    LiViDO is developed by:  

    Niels Elburg - http://veejay.sf.net  

    Gabriel "Salsaman" Finch - http://lives.sourceforge.net  

    Denis "Jaromil" Rojo - http://freej.dyne.org  

    Tom Schouten - http://zwizwa.fartit.com  

    Andraz Tori - http://cvs.cinelerra.org  

    reviewed with suggestions and contributions from:  

    Silvano "Kysucix" Galliani - http://freej.dyne.org  

    Kentaro Fukuchi - http://megaui.net/fukuchi  

    Jun Iio - http://www.malib.net  

    Carlo Prelz - http://www2.fluido.as:8080/  

    */  

    /* (C) Gabriel "Salsaman" Finch, Niels Elburg, Dennis "Jaromil" Rojo, 2005 */  

    * ifndef __LIVIDO_H__  
    * define __LIVIDO_H__  

    * ifdef __cplusplus  
    extern "C"  
    {  
    * endif /* __cplusplus */  

    * define LIVIDO_API_VERSION 1  

    /* Palette types */  
    /* RGB palettes */  
    * define LIVIDO_PALETTE_RGB888 1  
    * define LIVIDO_PALETTE_RGB24 1  
    * define LIVIDO_PALETTE_BGR888 2  
    * define LIVIDO_PALETTE_BGR24 2  
    * define LIVIDO_PALETTE_RGB161616 3  
    * define LIVIDO_PALETTE_RGB48 3  
    * define LIVIDO_PALETTE_BGR161616 4  
    * define LIVIDO_PALETTE_BGR48 4  
    * define LIVIDO_PALETTE_RGBA8888 5  
    * define LIVIDO_PALETTE_RGBA32 5  
    * define LIVIDO_PALETTE_ABGR8888 6  
    * define LIVIDO_PALETTE_ABGR32 6  
    * define LIVIDO_PALETTE_RGBA161616 7  
    * define LIVIDO_PALETTE_RGBA64 7  
    * define LIVIDO_PALETTE_ABGR161616 8  
    * define LIVIDO_PALETTE_ABGR64 8  
    * define LIVIDO_PALETTE_ARGB8888 9  
    * define LIVIDO_PALETTE_ARGB32 9  
    * define LIVIDO_PALETTE_BGRA8888 10  
    * define LIVIDO_PALETTE_BGRA32 10  
    * define LIVIDO_PALETTE_ARGB161616 11  
    * define LIVIDO_PALETTE_ARGB64 11  
    * define LIVIDO_PALETTE_BGRA161616 12  
    * define LIVIDO_PALETTE_BGRA64 12  
    * define LIVIDO_PALETTE_RGBFLOAT 13  
    * define LIVIDO_PALETTE_BGRFLOAT 14  
    * define LIVIDO_PALETTE_RGBAFLOAT 15  
    * define LIVIDO_PALETTE_ABGRFLOAT 16  
    * define LIVIDO_PALETTE_ARGBFLOAT  17  
    * define LIVIDO_PALETTE_BGRAFLOAT 18  
    * define LIVIDO_PALETTE_RGB565 19  
    * define LIVIDO_PALETTE_BGR565 20  

    /* YUV palettes */  
    * define LIVIDO_PALETTE_YUV422P 513  
    * define LIVIDO_PALETTE_YV16 513  
    * define LIVIDO_PALETTE_YUV420P 514  
    * define LIVIDO_PALETTE_YV12 514  
    * define LIVIDO_PALETTE_YVU420P 515  
    * define LIVIDO_PALETTE_I420 515  
    * define LIVIDO_PALETTE_YUV444P 516  
    * define LIVIDO_PALETTE_YUVA4444P 517  
    * define LIVIDO_PALETTE_YUV4444P 517  
    * define LIVIDO_PALETTE_YUYV8888 518  
    * define LIVIDO_PALETTE_UYVY8888 519  
    * define LIVIDO_PALETTE_YUV411 520  

    /* Alpha palettes */  
    * define LIVIDO_PALETTE_A1 1025  
    * define LIVIDO_PALETTE_A2 1026  
    * define LIVIDO_PALETTE_A4 1027  
    * define LIVIDO_PALETTE_A8 1028  
    * define LIVIDO_PALETTE_A16 1029  
    * define LIVIDO_PALETTE_AFLOAT 1030  

    /* Filter flags */  
    * define LIVIDO_FILTER_NON_REALTIME    (1<<0)  
    * define LIVIDO_FILTER_CAN_DO_INPLACE  (1<<1)  
    * define LIVIDO_FILTER_CAN_DO_SCALED   (1<<2)  
    * define LIVIDO_FILTER_CAN_DO_VIEWPORT (1<<3)  
    * define LIVIDO_FILTER_SELF_AUTOMATION (1<<4)  
    * define LIVIDO_FILTER_FPS_NEEDED      (1<<5)  
    * define LIVIDO_FILTER_STATELESS       (1<<6)  

    /* Channel flags */  
    * define LIVIDO_CHANNEL_MASK (1<<0)  
    * define LIVIDO_CHANNEL_HOST_CAN_RESIZE (1<<1)  
    * define LIVIDO_CHANNEL_HOST_CAN_CHANGE_PALETTE (1<<2)  

    /* Parameter flags */  
    * define LIVIDO_PARAMETER_NEEDS_REINIT (1<<0)  

    /* Property flags */  
    * define LIVIDO_PROPERTY_READONLY (1<<0)  

    /* YUV sampling types */  
    * define LIVIDO_YUV_SAMPLING_NONE 0  
    * define LIVIDO_YUV_SAMPLING_SMPTE 1  
    * define LIVIDO_YUV_SAMPLING_JPEG 2  
    * define LIVIDO_YUV_SAMPLING_MPEG2 3  
    * define LIVIDO_YUV_SAMPLING_DVPAL 4  
    * define LIVIDO_YUV_SAMPLING_DVNTSC 5  

    /* Interlace types */  
    * define LIVIDO_INTERLACE_NONE            0  
    * define LIVIDO_INTERLACE_TOPFIRST        1  
    * define LIVIDO_INTERLACE_BOTTOMFIRST     2  
    * define LIVIDO_INTERLACE_PROGRESSIVE     3  

    /* Viewport types */  
    * define LIVIDO_VIEWPORT_RECTANGLE 1  
    * define LIVIDO_VIEWPOERT_POLYGON 2  
    * define LIVIDO_VIEWPORT_CIRCLE 3  
    * define LIVIDO_VIEWPORT_OVAL 4  
    * define LIVIDO_VIEWPORT_TRIANGLE 5  

    /* Colorkey colorspaces */  
    * define LIVIDO_COLORKEY_RGB  0  
    * define LIVIDO_COLORKEY_HSV  1  
    * define LIVIDO_COLORKEY_HSL  2  
    * define LIVIDO_COLORKEY_CMYK 3  

    /* Livido errors */  
    /* Core errors */  
    * define LIVIDO_NO_ERROR 0  
    * define LIVIDO_ERROR_MEMORY_ALLOCATION 1  
    * define LIVIDO_ERROR_PROPERTY_READONLY 2  
    * define LIVIDO_ERROR_NOSUCH_ELEMENT 3  
    * define LIVIDO_ERROR_NOSUCH_PROPERTY 4  
    * define LIVIDO_ERROR_WRONG_ATOM_TYPE 5  

    /* Plugin errors */  
    * define LIVIDO_ERROR_TOO_MANY_INSTANCES 6  
    * define LIVIDO_ERROR_HARDWARE 7  

    /* Atom types */  
    /* Fundamental atoms */  
    * define LIVIDO_ATOM_TYPE_INT 1  
    * define LIVIDO_ATOM_TYPE_FLOAT 2  
    * define LIVIDO_ATOM_TYPE_LONG 3  
    * define LIVIDO_ATOM_TYPE_BOOLEAN 4  
    * define LIVIDO_ATOM_TYPE_STRING 5  

    /* Pointer atoms */  
    * define LIVIDO_ATOM_TYPE_VOIDPTR 65  
    * define LIVIDO_ATOM_TYPE_UINT8PTR 66  
    * define LIVIDO_ATOM_TYPE_UINT16PTR 67  
    * define LIVIDO_ATOM_TYPE_UINT32PTR 68  
    * define LIVIDO_ATOM_TYPE_FLOATPTR 69  
    * define LIVIDO_ATOM_TYPE_FILTERPTR 70  
    * define LIVIDO_ATOM_TYPE_PORTPTR 71  

    /* Port types */  
    * define LIVIDO_PORT_TYPE_FILTER_LIST 1  
    * define LIVIDO_PORT_TYPE_INFO 2  
    * define LIVIDO_PORT_TYPE_CHANNEL 3  
    * define LIVIDO_PORT_TYPE_PARAMETER 4  
    * define LIVIDO_PORT_TYPE_KEYFRAME 5  
    * define LIVIDO_PORT_TYPE_GUI 6  

    /* Parameter port hints */  
    * define NUMBER 1  
    * define TEXT 2  
    * define SWITCH 3  
    * define LIST 4  
    * define CHOICE 5  
    * define COLORKEY 6  
    * define COORDINATE 7  
    * define TRANSITION 8  

    extern void *livido_malloc_f (size_t size);  
    extern void livido_free_f (void *ptr);  
    extern void *livido_memset_f (void *s, int c, size_t n);  
    extern void *livido_memcpy_f (void *dest, const void *src, size_t n);  

    * ifndef HAVE_LIVIDO_PORT_T  
    * define HAVE_LIVIDO_PORT_T  

    typedef struct livido_property livido_property_t;  
    typedef livido_property_t livido_port_t;  

    typedef struct livido_atom {  
    size_t size;  
    void *value;  
    } livido_atom_t;  

    typedef struct livido_storage {  
    int num_elements;  
    int atom_type;  
    union {  
    livido_atom_t *atom;  
    livido_atom_t **array;  
    };  
    } livido_storage_t;  

    struct livido_property {  
    const char *key;  
    livido_storage_t *data;  
    int flags;  
    livido_property_t *next;  
    };  

    * endif  

    typedef struct livido_filter {  
    livido_port_t *info;  
    livido_port_t **in_channels;  
    livido_port_t **out_channels;  
    livido_port_t **in_parameters;  
    livido_port_t **out_parameters;  
    } livido_filter_t;  

    extern void livido_port_free (livido_port_t *prop);  
    extern livido_port_t *livido_port_new(int port_type);  
    extern char **livido_list_properties(livido_port_t *port);  
    extern int livido_property_set(livido_port_t *port, const char *key, int atom_type, int num_elems, void *value, size_t *size);  
    extern int livido_property_get(livido_port_t *port, const char *key, int idx, void *value);  
    extern int livido_property_num_elements(livido_port_t *port, const char *key);  
    extern int livido_property_element_size(livido_port_t *port, const char *key, int idx);  
    extern int livido_property_atom_type(livido_port_t *port, const char *key);  
    extern int livido_property_set_readonly(livido_port_t *port, const char *key);  
    extern int livido_property_get_readonly(livido_port_t *port, const char *key);  

    * ifdef __cplusplus  
    }  
    * endif /* __cplusplus */  

    * endif // #ifndef __LIVIDO_H__  


## livido.c  
This is a reference implementation of the livido core library. It will eventually be made into a library which can be linked in at compile time.  


#### Code  


    /* LiViDO is free software; you can redistribute it and/or  
    modify it under the terms of the GNU Lesser General Public  
    License as published by the Free Software Foundation; either  
    version 2.1 of the License, or (at your option) any later version.  

    LiViDO is distributed in the hope that it will be useful,  
    but WITHOUT ANY WARRANTY; without even the implied warranty of  
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU  
    Lesser General Public License for more details.  

    You should have received a copy of the GNU Lesser General Public  
    License along with this source code; if not, write to the Free Software  
    Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA  

    LiViDO is developed by:  

    Niels Elburg - http://veejay.sf.net  

    Gabriel "Salsaman" Finch - http://lives.sourceforge.net  

    Denis "Jaromil" Rojo - http://freej.dyne.org  

    Tom Schouten - http://zwizwa.fartit.com  

    Andraz Tori - http://cvs.cinelerra.org  

    reviewed with suggestions and contributions from:  

    Silvano "Kysucix" Galliani - http://freej.dyne.org  

    Kentaro Fukuchi - http://megaui.net/fukuchi  

    Jun Iio - http://www.malib.net  

    Carlo Prelz - http://www2.fluido.as:8080/  

    */  

    /* (C) Gabriel "Salsaman" Finch, Niels Elburg, Dennis "Jaromil" Rojo, 2005 */  

    * include <string.h>  
    * include <sys/types.h>  

    static inline int livido_atom_type_is_ptr (int atom_type) {  
    return (atom_type==LIVIDO_ATOM_TYPE_VOIDPTR||atom_type==LIVIDO_ATOM_TYPE_PORTPTR||\  
    atom_type==LIVIDO_ATOM_TYPE_FILTERPTR)?1:0;  
    }  

    static inline size_t livido_atom_type_get_size (int atom_type, void *value) {  
    return livido_atom_type_is_ptr (atom_type)?0:\  
    (atom_type==LIVIDO_ATOM_TYPE_BOOLEAN||atom_type==LIVIDO_ATOM_TYPE_INT)?sizeof(int):\  
    (atom_type==LIVIDO_ATOM_TYPE_FLOAT)?sizeof(float):\  
    (atom_type==LIVIDO_ATOM_TYPE_LONG)?sizeof(long):\  
    (atom_type==LIVIDO_ATOM_TYPE_STRING)?strlen((const char *)value):0;  
    }  

    static inline void livido_atom_free(livido_atom_t *atom, int atom_type) {  
    if (!livido_atom_type_is_ptr(atom_type)) livido_free_f (atom->value);  
    livido_free_f (atom);  
    }  

    static inline livido_atom_t *livido_atom_new(void *value, int atom_type, size_t size) {  
    livido_atom_t *atom=(livido_atom_t *)livido_malloc_f(sizeof(livido_atom_t));  
    if (atom==NULL) return NULL;  
    if (livido_atom_type_is_ptr(atom_type)) {  
    atom->size=size;  
    livido_memcpy_f (&atom->value,value,sizeof(void *));  
    }  
    else {  
    if (atom_type==LIVIDO_ATOM_TYPE_STRING) {  
    char ** valuecharptrptr=(char **)value;  
    atom->size=livido_atom_type_get_size(atom_type,*valuecharptrptr);  
    }  
    else atom->size=livido_atom_type_get_size(atom_type,value);  
    atom->value=livido_malloc_f(atom->size);  
    if (atom->value==NULL) {  
    livido_free_f (atom);  
    return NULL;  
    }  
    if (atom_type==LIVIDO_ATOM_TYPE_STRING) {  
    char ** valuecharptrptr=(char **)value;  
    livido_memcpy_f (atom->value,*valuecharptrptr,atom->size);  
    }  
    else livido_memcpy_f (atom->value,value,atom->size);  
    }  
    return atom;  
    }  

    static inline void livido_storage_free(livido_storage_t *store) {  
    register int i;  
    if (store->num_elements==1) livido_atom_free(store->atom,store->atom_type);  
    else for (i=0;i<store->num_elements;i++) livido_atom_free(store->array[i],store->atom_type);  
    }  

    static inline livido_storage_t *livido_storage_new(int atom_type, int num_elems, void *value, size_t *sizes) {  
    livido_storage_t *store=(livido_storage_t *)livido_malloc_f(sizeof(livido_storage_t));  
    if (store==NULL) return NULL;  
    store->num_elements=num_elems;  
    store->atom_type=atom_type;  
    if (num_elems==0) store->atom=NULL;  
    else {  
    if (num_elems==1) {  
    if ((store->atom=livido_atom_new (value, atom_type, livido_atom_type_is_ptr(atom_type)?sizes[0]:0))==NULL) {  
    livido_free_f (store);  
    return NULL;  
    }  
    }  
    else {  
    register int i;  
    void **valuevoidptrptr=(void **)value;  
    if ((store->array=(livido_atom_t **)livido_malloc_f(num_elems*sizeof(livido_atom_t *)))==NULL) {  
    livido_free_f (store);  
    return NULL;  
    }  
    for (i=0;i<num_elems;i++) {  
    if (livido_atom_type_is_ptr(atom_type)) store->array[i]=livido_atom_new(&valuevoidptrptr[i],atom_type,sizes[i]);  
    else {  
    if (atom_type==LIVIDO_ATOM_TYPE_STRING) store->array[i]=livido_atom_new(valuevoidptrptr[i],atom_type,0);  
    else store->array[i]=livido_atom_new(&valuevoidptrptr[i],atom_type,0);  
    }  
    if (store->array[i]==NULL) { // memory error  
    for (--i;i>=0;i--) livido_free_f (store->array[i]);  
    livido_free_f (store);  
    return NULL;  
    }  
    }  
    }  
    }  
    return store;  
    }  

    static inline livido_property_t *livido_find_property(livido_port_t *prop, const char *key) {  
    while (prop!=NULL) {  
    if (!strcmp((char *)prop->key,(char *)key)) return prop;  
    prop=prop->next;  
    }  
    return NULL;  
    }  

    static inline livido_storage_t *livido_get_storage_for(livido_port_t *port, const char *key) {  
    livido_property_t *prop=livido_find_property (port,key);  
    if (prop==NULL) return NULL;  
    return prop->data;  
    }  

    static inline livido_atom_t *livido_get_atom_from_storage(livido_storage_t *store, int idx) {  
    if (idx>store->num_elements||store->num_elements==0) return NULL;  
    if (store->num_elements==1) return store->atom;  
    return store->array[idx];  
    }  

    static inline void livido_property_free(livido_property_t *prop) {  
    livido_storage_t *store=prop->data;  
    if (store==NULL) return;  
    livido_storage_free (store);  
    livido_free_f ((char *)prop->key);  
    }  

    static inline livido_property_t *livido_property_new(const char *key) {  
    size_t lstrlen;  
    livido_property_t *prop=(livido_property_t *)livido_malloc_f(sizeof(livido_property_t));  
    if (prop==NULL) return NULL;  
    if ((prop->key=(char *)livido_malloc_f((lstrlen=(strlen(key)+1))))==NULL) {  
    livido_free_f (prop);  
    return NULL;  
    }  
    livido_memcpy_f ((char *)prop->key,key,lstrlen);  
    prop->data=NULL;  
    prop->next=NULL;  
    prop->flags=0;  
    return prop;  
    }  

    static inline void livido_property_append(livido_port_t *prop,livido_property_t *newprop) {  
    livido_property_t *propnext;  
    while (prop!=NULL) {  
    propnext=prop->next;  
    if (propnext==NULL) {  
    prop->next=newprop;  
    return;  
    }  
    prop=propnext;  
    }  
    }  

    void livido_port_free(livido_port_t *prop) {  
    livido_property_t *propnext;  
    while (prop!=NULL) {  
    propnext=prop->next;  
    livido_property_free (prop);  
    prop=propnext;  
    }  
    }  

    livido_port_t *livido_port_new(int port_type) {  
    livido_property_t *prop;  
    size_t size=livido_atom_type_get_size(LIVIDO_ATOM_TYPE_INT,NULL);  
    if ((prop=livido_property_new("type"))==NULL) return NULL;  
    if ((prop->data=livido_storage_new (LIVIDO_ATOM_TYPE_INT,1,&port_type,&size))==NULL) {  
    livido_free_f ((char *)prop->key);  
    livido_free_f (prop);  
    return NULL;  
    }  
    prop->next=NULL;  
    livido_property_set_readonly (prop,"type");  
    return prop;  
    }  

    char **livido_list_properties(livido_port_t *port) {  
    livido_property_t *prop=port;  
    char **proplist;  
    register int i=1;  
    size_t lstrlen;  
    for (;prop!=NULL;i++) {  
    prop=prop->next;  
    }  
    if ((proplist=(char **)livido_malloc_f(i*sizeof(char *)))==NULL) return NULL;  
    i=0;  
    for (prop=port;prop!=NULL;prop=prop->next) {  
    if ((proplist[i]=(char *)livido_malloc_f((lstrlen=strlen(prop->key))+1))==NULL) {  
    for (--i;i>=0;i--) livido_free_f (proplist[i]);  
    livido_free_f (proplist);  
    return NULL;  
    }  
    livido_memcpy_f (proplist[i],prop->key,lstrlen);  
    livido_memset_f (proplist[i++]+lstrlen,0,1);  
    }  
    proplist[i]=NULL;  
    return proplist;  
    }  

    int livido_property_set(livido_port_t *port, const char *key, int atom_type, int num_elems, void *value, size_t *size) {  
    livido_storage_t *store;  
    livido_property_t *prop=livido_find_property (port,key);  
    if (prop==NULL) {  
    if ((prop=livido_property_new (key))==NULL) return LIVIDO_ERROR_MEMORY_ALLOCATION;  
    livido_property_append (port,prop);  
    }  
    else {  
    if (prop->flags&LIVIDO_PROPERTY_READONLY) return LIVIDO_ERROR_PROPERTY_READONLY;  
    if (atom_type!=prop->data->atom_type) return LIVIDO_ERROR_WRONG_ATOM_TYPE;  
    livido_storage_free (prop->data);  
    prop->data=NULL;  
    }  
    if ((store=livido_storage_new (atom_type,num_elems,value,size))==NULL) {  
    return LIVIDO_ERROR_MEMORY_ALLOCATION;  
    }  
    prop->data=store;  
    return LIVIDO_NO_ERROR;  
    }  

    int livido_property_get(livido_port_t *port, const char *key, int idx, void *value) {  
    livido_atom_t *atom;  
    livido_storage_t *store=livido_get_storage_for (port,key);  
    if (store==NULL) return LIVIDO_ERROR_NOSUCH_PROPERTY;  
    if ((atom=livido_get_atom_from_storage (store,idx))==NULL) return LIVIDO_ERROR_NOSUCH_ELEMENT;  
    if (livido_atom_type_is_ptr (store->atom_type)) livido_memcpy_f (value,&atom->value,sizeof(void *));  
    else {  
    if (store->atom_type==LIVIDO_ATOM_TYPE_STRING) {  
    char **valuecharptrptr=(char **)value;  
    livido_memcpy_f(*valuecharptrptr,atom->value,atom->size);  
    livido_memset_f(*valuecharptrptr+atom->size,0,1);  
    }  
    else livido_memcpy_f (value,atom->value,atom->size);  
    }  
    return LIVIDO_NO_ERROR;  
    }  

    int livido_property_num_elements(livido_port_t *port, const char *key) {  
    livido_storage_t *store=livido_get_storage_for (port, key);  
    if (store==NULL) return 0;  
    return store->num_elements;  
    }  

    int livido_property_element_size(livido_port_t *port, const char *key, int idx) {  
    livido_atom_t *atom;  
    livido_storage_t *store=livido_get_storage_for (port, key);  
    if (store==NULL) return 0;  
    if ((atom=livido_get_atom_from_storage (store, idx))==NULL) return 0;  
    return atom->size;  
    }  

    int livido_property_atom_type(livido_port_t *port, const char *key) {  
    livido_storage_t *store=livido_get_storage_for (port, key);  
    if (store==NULL) return 0;  
    return store->atom_type;  
    }  

    int livido_property_set_readonly(livido_port_t *port, const char *key) {  
    livido_property_t *prop=livido_find_property (port, key);  
    if (prop==NULL) return LIVIDO_ERROR_NOSUCH_PROPERTY;  
    prop->flags|=LIVIDO_PROPERTY_READONLY;  
    return LIVIDO_NO_ERROR;  
    }  

    int livido_property_get_readonly(livido_port_t *port, const char *key) {  
    livido_property_t *prop=livido_find_property (port, key);  
    if (prop==NULL) return 0;  
    return prop->flags&LIVIDO_PROPERTY_READONLY;  
    }  


## Sample code  


## Section 1: Examples using only the core functions  


#### Example 1.1: Creating and freeing a port  


    #include <stdlib.h> // for malloc(), free()  
    * include <string.h> // for memset(), memcpy()  
    * include "livido.h"  
    * include "livido.c"  

    void *livido_malloc_f (size_t size) {return malloc(size);}  
    void livido_free_f (void *ptr) {free(ptr);}  
    void *livido_memset_f (void *s, int c, size_t n) {return memset(s,c,n);}  
    void *livido_memcpy_f (void *dest, const void *src, size_t n) {return memcpy(dest,src,n);}  

    int main (void) {  
    livido_port_t *filter=livido_port_new (LIVIDO_PORT_TYPE_FILTER_CLASS);  
    if (filter!=NULL) livido_port_free (filter);  
    return 1;  
    }  


#### Example 1.2: Creating a port, setting and reading an int, and freeing the port  


    #include <stdlib.h> // for malloc(), free()  
    * include <string.h> // for memset(), memcpy()  
    * include <stdio.h>  
    * include "livido.h"  
    * include "livido.c"  

    void *livido_malloc_f (size_t size) {return malloc(size);}  
    void livido_free_f (void *ptr) {free(ptr);}  
    void *livido_memset_f (void *s, int c, size_t n) {return memset(s,c,n);}  
    void *livido_memcpy_f (void *dest, const void *src, size_t n) {return memcpy(dest,src,n);}  

    int main (void) {  
    int in_int=55;  
    int out_int;  
    livido_port_t *filter=livido_port_new (LIVIDO_PORT_TYPE_FILTER_CLASS);  

    livido_property_set (filter,"test",LIVIDO_ATOM_TYPE_INT,1,&in_int);  
    livido_property_get (filter,"test",0,&out_int);  

    printf ("test is %d\n",out_int);  

    livido_port_free (filter);  
    return 1;  
    }  


#### Example 1.3: Creating a port, setting and retrieving a UTF-8 string, and freeing the port  


    #include <stdlib.h> // for malloc(), free()  
    * include <string.h> // for memset(), memcpy()  
    * include <stdio.h>  
    * include "livido.h"  
    * include "livido.c"  

    void *livido_malloc_f (size_t size) {return malloc(size);}  
    void livido_free_f (void *ptr) {free(ptr);}  
    void *livido_memset_f (void *s, int c, size_t n) {return memset(s,c,n);}  
    void *livido_memcpy_f (void *dest, const void *src, size_t n) {return memcpy(dest,src,n);}  

    int main (void) {  
    char *in_string="LiViDO Test";  
    char *out_string;  
    livido_port_t *filter=livido_port_new (LIVIDO_PORT_TYPE_FILTER_CLASS);  

    livido_property_set (filter,"name",LIVIDO_ATOM_TYPE_STRING,1,&in_string,NULL);  

    /* don't forget to add one byte for the terminating NULL */  
    out_string=(char *)malloc(livido_property_element_size(info,"name",0)+1);  
    livido_property_get (filter,"name",0,&out_string);  
    printf ("name is %s\n",out_string);  

    free (out_string);  

    livido_port_free (filter);  
    return 1;  
    }  


#### Example 1.4: Storing a reference to pointer type, retrieving and copying  


    #include <stdlib.h> // for malloc(), free()  
    * include <string.h> // for memset(), memcpy()  
    * include <stdio.h>  
    * include "livido.h"  
    * include "livido.c"  

    void *livido_malloc_f (size_t size) {return malloc(size);}  
    void livido_free_f (void *ptr) {free(ptr);}  
    void *livido_memset_f (void *s, int c, size_t n) {return memset(s,c,n);}  
    void *livido_memcpy_f (void *dest, const void *src, size_t n) {return memcpy(dest,src,n);}  

    int main (void) {  
    void *source_blob=malloc(1024);  
    void *blob_ptr,*dest_blob;  

    livido_port_t *filter=livido_port_new (LIVIDO_PORT_TYPE_FILTER_CLASS);  

    livido_property_set (filter,"internal",LIVIDO_ATOM_TYPE_VOIDPTR,1,&source_blob);  
    livido_property_get (filter,"internal",0,&blob_ptr);  

    if (blob_ptr==source_blob) printf ("pointer was stored correctly\n");  
    printf ("stored a pointer to a memory block %p\n",blob_ptr);  

    free (source_blob);  
    free (dest_blob);  

    livido_port_free (filter);  
    return 1;  
    }  


#### Example 1.5: Setting and reading a double array  


    #include <stdlib.h> // for malloc(), free()  
    * include <string.h> // for memset(), memcpy()  
    * include <stdio.h>  
    * include "livido.h"  
    * include "livido.c"  

    void *livido_malloc_f (size_t size) {return malloc(size);}  
    void livido_free_f (void *ptr) {free(ptr);}  
    void *livido_memset_f (void *s, int c, size_t n) {return memset(s,c,n);}  
    void *livido_memcpy_f (void *dest, const void *src, size_t n) {return memcpy(dest,src,n);}  

    int main (void) {  
    double in_doubles[3]={25.31,19.76,7.65};  
    double out_doubles;  
    int num_elements,i;  

    livido_port_t *filter=livido_port_new (LIVIDO_PORT_TYPE_FILTER_CLASS);  
    livido_property_set (filter,"double array",LIVIDO_ATOM_TYPE_DOUBLE,3,&in_doubles);  

    num_elements=livido_property_num_elements (filter,"double array");  
    printf ("stored an array with %d elements\n",num_elements);  

    for (i=0;i<num_elements;i++) {  
    livido_property_get (filter,"double array",i,&out_doubles);  
    printf ("element %d is %.2f\n",i,out_doubles);  
    }  

    livido_port_free (filter);  
    return 1;  
    }  


#### Example 1.6: Setting and reading a pointer array  


    #include <stdlib.h> // for malloc(), free()  
    * include <string.h> // for memset(), memcpy()  
    * include <stdio.h>  
    * include "livido.h"  
    * include "livido.c"  

    void *livido_malloc_f (size_t size) {return malloc(size);}  
    void livido_free_f (void *ptr) {free(ptr);}  
    void *livido_memset_f (void *s, int c, size_t n) {return memset(s,c,n);}  
    void *livido_memcpy_f (void *dest, const void *src, size_t n) {return memcpy(dest,src,n);}  

    int main (void) {  
    void *in_array[3];  
    void *out_blob;  
    int num_elements,i;  
    size_t sizes[3]={128,256,1024};  

    livido_port_t *filter=livido_port_new (LIVIDO_PORT_TYPE_FILTER_CLASS);  

    in_array[0]=malloc(sizes[0]);  
    in_array[1]=malloc(sizes[1]);  
    in_array[2]=malloc(sizes[2]);  

    printf ("ptrs are: %p %p %p\n",in_array[0],in_array[1],in_array[2]);  

    livido_property_set (filter,"void array",LIVIDO_ATOM_TYPE_VOIDPTR,3,&in_array,sizes);  

    num_elements=livido_property_num_elements (filter,"void array");  
    printf ("stored an array with %d elements\n",num_elements);  

    for (i=0;i<num_elements;i++) {  
    livido_property_get (filter,"void array",i,&out_blob);  
    printf ("element %d is %p\n",i,out_blob);  
    }  

    free (in_array[0]);  
    free (in_array[1]);  
    free (in_array[2]);  
    livido_port_free (filter);  
    return 1;  
    }  


#### Example 1.7: Setting the type of a property without setting its value  


    #include <stdlib.h> // for malloc(), free()  
    * include <string.h> // for memset(), memcpy()  
    * include <stdio.h>  
    * include "livido.h"  
    * include "livido.c"  

    void *livido_malloc_f (size_t size) {return malloc(size);}  
    void livido_free_f (void *ptr) {free(ptr);}  
    void *livido_memset_f (void *s, int c, size_t n) {return memset(s,c,n);}  
    void *livido_memcpy_f (void *dest, const void *src, size_t n) {return memcpy(dest,src,n);}  

    int main (void) {  
    int type;  
    livido_port_t *filter=livido_port_new (LIVIDO_PORT_TYPE_FILTER_CLASS);  

    /* set just the property type, without setting a value */  
    livido_property_set (filter,"test",LIVIDO_ATOM_TYPE_INT,0,NULL);  

    type=livido_property_atom_type (filter,"test");  

    if (type==LIVIDO_ATOM_TYPE_INT) printf ("\"test\" is an int property\n");  

    livido_port_free (filter);  
    return 1;  
    }  


#### Example 1.8: Setting the type of a property, then trying to change it  


    #include <stdlib.h> // for malloc(), free()  
    * include <string.h> // for memset(), memcpy()  
    * include <stdio.h>  
    * include "livido.h"  
    * include "livido.c"  

    void *livido_malloc_f (size_t size) {return malloc(size);}  
    void livido_free_f (void *ptr) {free(ptr);}  
    void *livido_memset_f (void *s, int c, size_t n) {return memset(s,c,n);}  
    void *livido_memcpy_f (void *dest, const void *src, size_t n) {return memcpy(dest,src,n);}  

    int main (void) {  
    int inint=5;  
    int outint;  
    int type;  
    double mydouble=7.6;  
    int error;  
    livido_port_t *filter=livido_port_new (LIVIDO_PORT_TYPE_FILTER_INFO);  

    /* make "test" an int property */  
    livido_property_set (filter,"test",LIVIDO_ATOM_TYPE_INT,1,&inint);  
    type=livido_property_atom_type (filter,"test");  
    livido_property_get (filter,"test",0,&outint);  

    if (type==LIVIDO_ATOM_TYPE_INT) printf ("\"test\" is an int property, its value is %d\n",outint);  

    /* now we try to set a double in it, we should get an error */  
    error=livido_property_set (filter,"test",LIVIDO_ATOM_TYPE_DOUBLE,1,&mydouble);  

    printf ("error was %d\n",error);  
    if (error==LIVIDO_ERROR_WRONG_ATOM_TYPE) printf ("The type could not be changed !\n");  

    type=livido_property_atom_type (filter,"test");  
    livido_property_get (filter,"test",0,&outint);  

    if (type==LIVIDO_ATOM_TYPE_INT) printf ("\"test\" is still an int property, its value is %d\n",outint);  

    livido_port_free (filter);  
    return 1;  
    }  


#### Example 1.9 setting a property readonly  


    #include <stdlib.h> // for malloc(), free()  
    * include <string.h> // for memset(), memcpy()  
    * include <stdio.h>  
    * include "livido.h"  
    * include "livido.c"  

    void *livido_malloc_f (size_t size) {return malloc(size);}  
    void livido_free_f (void *ptr) {free(ptr);}  
    void *livido_memset_f (void *s, int c, size_t n) {return memset(s,c,n);}  
    void *livido_memcpy_f (void *dest, const void *src, size_t n) {return memcpy(dest,src,n);}  

    int main (void) {  

    int inint=5;  
    int outint;  
    int error;  
    int is_rdonly;  
    livido_port_t *filter=livido_port_new (LIVIDO_PORT_TYPE_FILTER_CLASS);  

    /* make "test" an int property */  
    livido_property_set (filter,"test",LIVIDO_ATOM_TYPE_INT,1,&inint);  
    livido_property_get (filter,"test",0,&outint);  
    is_rdonly=livido_property_get_readonly (filter,"test");  

    printf ("The value of \"test\" is %d, readonly state is %d\n",outint,is_rdonly);  

    /* now we set it readonly */  
    livido_property_set_readonly (filter, "test");  

    inint=7;  

    /* now we try to change the value, we should get an error */  
    error=livido_property_set (filter,"test",LIVIDO_ATOM_TYPE_INT,1,&inint);  
    if (error==LIVIDO_ERROR_PROPERTY_READONLY) printf ("The property is readonly !\n");  

    livido_property_get (filter,"test",0,&outint);  
    is_rdonly=livido_property_get_readonly (filter,"test");  
    printf ("The value of \"test\" is %d, readonly state is %d\n",outint,is_rdonly);  

    livido_port_free (filter);  
    return 1;  
    }  


#### Example 1.10: setting all mandatory properties for an "index" parameter template, then lisiting its properties  


    #include <stdlib.h> // for malloc(), free()  
    * include <string.h> // for memset(), memcpy()  
    * include <stdio.h>  
    * include "livido.h"  
    * include "livido.c"  

    void *livido_malloc_f (size_t size) {return malloc(size);}  
    void livido_free_f (void *ptr) {free(ptr);}  
    void *livido_memset_f (void *s, int c, size_t n) {return memset(s,c,n);}  
    void *livido_memcpy_f (void *dest, const void *src, size_t n) {return memcpy(dest,src,n);}  

    int main (void) {  
    char *name="Parameter 1";  
    char *kind="INDEX";  
    int default=100;  
    int min=0;  
    int max=255;  
    int i;  
    char **prop_list;  
    livido_port_t *param=livido_port_new (LIVIDO_PORT_TYPE_PARAMETER_TEMPLATE);  

    /* set all of the mandatory properties */  
    livido_property_set (param,"kind",LIVIDO_ATOM_TYPE_STRING,1,&kind);  
    livido_property_set (param,"name",LIVIDO_ATOM_TYPE_STRING,1,&name);  
    livido_property_set (param,"default",LIVIDO_ATOM_TYPE_INT,1,&default);  
    livido_property_set (param,"min",LIVIDO_ATOM_TYPE_INT,1,&min);  
    livido_property_set (param,"max",LIVIDO_ATOM_TYPE_INT,1,&max);  

    /* now list the properties */  
    prop_list=livido_list_properties (param);  

    if (prop_list!=NULL) {  
    for (i=0;prop_list[i]!=NULL;i++) {  
    printf ("Property %d is called \"%s\"\n",i,prop_list[i]);  
    free (prop_list[i]);  
    }  
    free (prop_list);  
    }  

    livido_port_free (param);  
    return 1;  
    }  


## Section 2: Examples using the livido-utility functions  


#### Example 2.1: Creating and freeing a port, setting and reading an int property, checking if properties exist  


    #include <stdlib.h> // for malloc(), free()  
    * include <string.h> // for memset(), memcpy()  
    * include <stdio.h>  

    * include "livido.h"  
    * include "livido.c"  
    * include "livido-utils.c"  

    void *livido_malloc_f (size_t size) {return malloc(size);}  
    void livido_free_f (void *ptr) {free(ptr);}  
    void *livido_memset_f (void *s, int c, size_t n) {return memset(s,c,n);}  
    void *livido_memcpy_f (void *dest, const void *src, size_t n) {return memcpy(dest,src,n);}  

    int main (void) {  
    int in_int=55;  
    int out_int;  
    int error;  

    livido_port_t *filter=livido_port_new (LIVIDO_PORT_TYPE_FILTER_CLASS);  

    livido_set_int_value (filter,"test",in_int);  
    if (livido_has_property (filter,"test")) printf ("filter has property \"test\"\n");  

    out_int=livido_get_int_value (filter,"test",&error);  

    printf ("test is %d\n",out_int);  

    if (!livido_has_property (filter,"test2")) printf ("filter does not have property \"test2\"\n");  

    livido_port_free (filter);  
    return 1;  
    }  


#### Example 2.2: Creating and freeing a port, setting and reading a string property  


    #include <stdlib.h> // for malloc(), free()  
    * include <string.h> // for memset(), memcpy()  
    * include <stdio.h>  

    * include "livido.h"  
    * include "livido.c"  
    * include "livido-utils.c"  

    void *livido_malloc_f (size_t size) {return malloc(size);}  
    void livido_free_f (void *ptr) {free(ptr);}  
    void *livido_memset_f (void *s, int c, size_t n) {return memset(s,c,n);}  
    void *livido_memcpy_f (void *dest, const void *src, size_t n) {return memcpy(dest,src,n);}  

    int main (void) {  
    char *in_string="LiViDO test";  
    char *out_string;  
    int error;  

    livido_port_t *filter=livido_port_new (LIVIDO_PORT_TYPE_FILTER_CLASS);  

    livido_set_string_value (filter,"test",in_string);  

    out_string=livido_get_string_value (filter,"test",&error);  

    printf ("\"test\" is \"%s\"\n",out_string);  

    free (out_string);  

    livido_port_free (filter);  
    return 1;  
    }  


#### Example 2.3: Creating and freeing a port, setting and reading a voidptr property  


    #include <stdlib.h> // for malloc(), free()  
    * include <string.h> // for memset(), memcpy()  
    * include <stdio.h>  

    * include "livido.h"  
    * include "livido.c"  
    * include "livido-utils.c"  

    void *livido_malloc_f (size_t size) {return malloc(size);}  
    void livido_free_f (void *ptr) {free(ptr);}  
    void *livido_memset_f (void *s, int c, size_t n) {return memset(s,c,n);}  
    void *livido_memcpy_f (void *dest, const void *src, size_t n) {return memcpy(dest,src,n);}  

    int main (void) {  
    void *in_voidptr=malloc(1024);  
    void *out_voidptr;  
    int error;  

    livido_port_t *filter=livido_port_new (LIVIDO_PORT_TYPE_FILTER_CLASS);  

    livido_set_voidptr_value (filter,"test",in_voidptr);  
    out_voidptr=livido_get_voidptr_value (filter,"test",&error);  

    printf ("\"test\" is %p, in ptr was %p\n",out_voidptr,in_voidptr);  

    free (in_voidptr);  

    livido_port_free (info);  
    return 1;  
    }  


#### Example 2.4: Creating and freeing a port, setting and reading a double array  


    #include <stdlib.h> // for malloc(), free()  
    * include <string.h> // for memset(), memcpy()  
    * include <stdio.h>  

    * include "livido.h"  
    * include "livido.c"  
    * include "livido-utils.c"  

    void *livido_malloc_f (size_t size) {return malloc(size);}  
    void livido_free_f (void *ptr) {free(ptr);}  
    void *livido_memset_f (void *s, int c, size_t n) {return memset(s,c,n);}  
    void *livido_memcpy_f (void *dest, const void *src, size_t n) {return memcpy(dest,src,n);}  

    int main (void) {  
    float in_doubles[]={48.1,42.9};  
    float *out_doubles;  
    int error;  

    livido_port_t *filter=livido_port_new (LIVIDO_PORT_TYPE_FILTER_CLASS);  

    livido_set_double_array (filter,"test",2,in_doubles);  
    out_doubles=livido_get_double_array (filter,"test",&error);  

    printf ("\"test\" is %.2f and %.2f\n",out_doubles[0],out_doubles[1]);  

    free (out_doubles);  

    livido_port_free (filter);  
    return 1;  
    }  


#### Example 2.5: Creating and freeing a port, setting and reading a string array  


    #include <stdlib.h> // for malloc(), free()  
    * include <string.h> // for memset(), memcpy()  
    * include <stdio.h>  

    * include "livido.h"  
    * include "livido.c"  
    * include "livido-utils.c"  

    void *livido_malloc_f (size_t size) {return malloc(size);}  
    void livido_free_f (void *ptr) {free(ptr);}  
    void *livido_memset_f (void *s, int c, size_t n) {return memset(s,c,n);}  
    void *livido_memcpy_f (void *dest, const void *src, size_t n) {return memcpy(dest,src,n);}  

    int main (void) {  
    char *in_strings[]={"test string 1","test string 2"};  
    char **out_strings;  
    int error;  

    livido_port_t *filter=livido_port_new (LIVIDO_PORT_TYPE_INFO);  

    livido_set_string_array (filter,"test",2,in_strings);  

    out_strings=livido_get_string_array (filter,"test",&error);  

    printf ("\"test\" is %s and %s\n",out_strings[0],out_strings[1]);  

    free (out_strings[0]);  
    free (out_strings[1]);  
    free (out_strings);  

    livido_port_free (filter);  
    return 1;  
    }  


#### Example 2.6: Creating and freeing a port, setting and reading a voidptr array  


    #include <stdlib.h> // for malloc(), free()  
    * include <string.h> // for memset(), memcpy()  
    * include <stdio.h>  

    * include "livido.h"  
    * include "livido.c"  
    * include "livido-utils.c"  

    void *livido_malloc_f (size_t size) {return malloc(size);}  
    void livido_free_f (void *ptr) {free(ptr);}  
    void *livido_memset_f (void *s, int c, size_t n) {return memset(s,c,n);}  
    void *livido_memcpy_f (void *dest, const void *src, size_t n) {return memcpy(dest,src,n);}  

    int main (void) {  
    void *in_voids[2];  
    void **out_voids;  
    size_t in_sizes[2]={1024,256};  
    int error;  

    livido_port_t *filter=livido_port_new (LIVIDO_PORT_TYPE_FILTER_CLASS);  

    in_voids[0]=malloc(in_sizes[0]);  
    in_voids[1]=malloc(in_sizes[1]);  

    livido_set_voidptr_array (filter,"test",2,in_voids);  

    /* warning, out_voids are reference only */  
    out_voids=livido_get_voidptr_array (filter,"test",&error);  

    printf ("\"test\" is %p and %p, original was %p and %p\n",out_voids[0],out_voids[1],in_voids[0],in_voids[1]);  

    free (out_voids);  

    livido_port_free (filter);  
    return 1;  
    }  


#### Example 2.7: Creating and freeing an INDEX parameter template, setting all the mandatory properties, setting readonly and listing them  


    #include <stdlib.h> // for malloc(), free()  
    * include <string.h> // for memset(), memcpy()  
    * include <stdio.h>  
    * include "livido.h"  
    * include "livido.c"  
    * include "livido-utils.c"  

    void *livido_malloc_f (size_t size) {return malloc(size);}  
    void livido_free_f (void *ptr) {free(ptr);}  
    void *livido_memset_f (void *s, int c, size_t n) {return memset(s,c,n);}  
    void *livido_memcpy_f (void *dest, const void *src, size_t n) {return memcpy(dest,src,n);}  

    int main (void) {  
    int i;  
    char **prop_list;  
    livido_port_t *param=livido_port_new (LIVIDO_PORT_TYPE_PARAMETER);  

    /* set all of the mandatory properties */  
    livido_set_int_value (param,"kind","INDEX");  
    livido_set_string_value (param,"name","Parameter1");  
    livido_set_int_value (param,"default",100);  
    livido_set_int_value (param,"min",0);  
    livido_set_int_value (param,"max",255);  

    /* now list the properties */  
    prop_list=livido_list_properties (param);  

    if (prop_list!=NULL) {  
    for (i=0;prop_list[i]!=NULL;i++) {  
    printf ("Property %d is called \"%s\"\n",i,prop_list[i]);  
    livido_property_set_readonly (param,prop_list[i]);  
    free (prop_list[i]);  
    }  
    free (prop_list);  
    }  

    livido_port_free (param);  
    return 1;  
    }